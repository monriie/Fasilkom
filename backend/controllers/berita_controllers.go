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

func GetBerita(c *fiber.Ctx) error {
	limit := c.Query("limit")

	cacheKey := "berita_all"
	if limit != "" {
		cacheKey += "_" + limit
	}

	if cached, found := cache.GetBeritaCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"berita": cached,
			"cache":  true,
		})
	}

	var berita []models.Berita
	query := database.DB.Model(&models.Berita{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&berita).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	cache.SetBeritaCache(cacheKey, berita)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"berita": berita,
		"cache":  false,
	})
}

func CreateBerita(c *fiber.Ctx) error {
	var berita models.Berita

	// **PERBAIKAN DI SINI:** Menambahkan argumen boolean keempat (isCover)
	// false untuk isProgramStudi, true untuk isCover (karena ini cover berita)
	cover, err := utils.SaveFile(c, "coverberita", false, true)
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
		berita.PostedAt = t
	} else {
		berita.PostedAt = time.Now()
	}

	berita.Coverberita = cover
	berita.Deskripsi = deskripsi

	if err := database.DB.Create(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save berita",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Berita created successfully",
		"berita":  berita,
	})
}

func UpdateBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID berita is required",
		})
	}
	var berita models.Berita

	if err := database.DB.Where("id =?", id).First(&berita).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if deskripsi := c.FormValue("deskripsi"); deskripsi != "" {
		berita.Deskripsi = deskripsi
	}

	if _, err := c.FormFile("coverberita"); err == nil {
		// **PERBAIKAN DI SINI:** Menambahkan argumen boolean keempat (isCover)
		// false untuk isProgramStudi, true untuk isCover (karena ini cover berita)
		cover, err := utils.SaveFile(c, "coverberita", false, true)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		berita.Coverberita = cover
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		berita.PostedAt = t
	}

	if err := database.DB.Save(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update berita",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Berita updated successfully",
		"berita":  berita,
	})
}

func DeleteBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID berita is required",
		})
	}
	var berita models.Berita

	if err := database.DB.Where("id =?", id).First(&berita).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Berita not found",
		})
	}

	if err := database.DB.Delete(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete berita",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Berita deleted successfully",
		"berita":  berita,
	})
}