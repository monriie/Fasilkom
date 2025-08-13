package controllers

import (
	"redesign_kel3/cache"
	"redesign_kel3/database"
	"redesign_kel3/models"
	"redesign_kel3/utils"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
)

func GetBeasiswa(c *fiber.Ctx) error {
	limit := c.Query("limit")

	cacheKey := "beasiswa_all"
	if limit != "" {
		cacheKey += "_" + limit
	}

	if cached, found := cache.GetBeasiswaCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"beasiswa": cached,
			"cache":    true,
		})
	}

	var beasiswa []models.Beasiswa
	query := database.DB.Model(&models.Beasiswa{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&beasiswa).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Beasiswa not found",
		})
	}

	cache.SetBeasiswaCache(cacheKey, beasiswa)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"beasiswa": beasiswa,
		"cache":    false,
	})
}

func CreateBeasiswa(c *fiber.Ctx) error {
	var beasiswa models.Beasiswa

	cover, err := utils.SaveFile(c, "coverbeasiswa", false)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err,
		})
	}

	deskripsi := c.FormValue("deskripsi")

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		beasiswa.PostedAt = t
	} else {
		beasiswa.PostedAt = time.Now()
	}

	beasiswa.CoverBeasiswa = cover
	beasiswa.Deskripsi = deskripsi

	if err := database.DB.Create(&beasiswa).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save beasiswa",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message":  "Beasiswa created successfully",
		"beasiswa": beasiswa,
	})
}

func UpdateBeasiswa(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID beasiswa is required",
		})
	}
	var beasiswa models.Beasiswa

	if err := database.DB.Where("id =?", id).First(&beasiswa).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Beasiswa not found",
		})
	}

	if deskripsi := c.FormValue("deskripsi"); deskripsi != "" {
		beasiswa.Deskripsi = deskripsi
	}

	if _, err := c.FormFile("coverbeasiswa"); err == nil {
		cover, err := utils.SaveFile(c, "coverbeasiswa", false)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		beasiswa.CoverBeasiswa = cover
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		beasiswa.PostedAt = t
	}

	if err := database.DB.Save(&beasiswa).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update beasiswa",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message":  "Beasiswa updated successfully",
		"beasiswa": beasiswa,
	})
}

func DeleteBeasiswa(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID beasiswa is required",
		})
	}
	var beasiswa models.Beasiswa

	if err := database.DB.Where("id =?", id).First(&beasiswa).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Beasiswa not found",
		})
	}

	if err := database.DB.Delete(&beasiswa).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete beasiswa",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message":  "Beasiswa deleted successfully",
		"beasiswa": beasiswa,
	})
}