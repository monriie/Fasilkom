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

func GetKemahasiswaan(c *fiber.Ctx) error {
	limit := c.Query("limit")

	cacheKey := "kemahasiswaan_all"
	if limit != "" {
		cacheKey += "_" + limit
	}

	if cached, found := cache.GetKemahasiswaanCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"kemahasiswaan": cached,
			"cache":         true,
		})
	}

	var kemahasiswaan []models.Kemahasiswaan
	query := database.DB.Model(&models.Kemahasiswaan{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&kemahasiswaan).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Kemahasiswaan not found",
		})
	}

	cache.SetKemahasiswaanCache(cacheKey, kemahasiswaan)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"kemahasiswaan": kemahasiswaan,
		"cache":         false,
	})
}

func CreateKemahasiswaan(c *fiber.Ctx) error {
	var kemahasiswaan models.Kemahasiswaan

	// **FIX:** Add the missing boolean argument (isCover)
	// false for isProgramStudi, true for isCover (as it is a cover)
	cover, err := utils.SaveFile(c, "coverkemahasiswaan", false, true)
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
		kemahasiswaan.PostedAt = t
	} else {
		kemahasiswaan.PostedAt = time.Now()
	}

	kemahasiswaan.Coverkemahasiswaan = cover
	kemahasiswaan.Deskripsi = deskripsi

	if err := database.DB.Create(&kemahasiswaan).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save kemahasiswaan",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message":       "Kemahasiswaan created successfully",
		"kemahasiswaan": kemahasiswaan,
	})
}

func UpdateKemahasiswaan(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID kemahasiswaan is required",
		})
	}
	var kemahasiswaan models.Kemahasiswaan

	if err := database.DB.Where("id =?", id).First(&kemahasiswaan).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Kemahasiswaan not found",
		})
	}

	if deskripsi := c.FormValue("deskripsi"); deskripsi != "" {
		kemahasiswaan.Deskripsi = deskripsi
	}

	if _, err := c.FormFile("coverkemahasiswaan"); err == nil {
		// **FIX:** Add the missing boolean argument (isCover)
		// false for isProgramStudi, true for isCover (as it is a cover)
		cover, err := utils.SaveFile(c, "coverkemahasiswaan", false, true)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		kemahasiswaan.Coverkemahasiswaan = cover
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		kemahasiswaan.PostedAt = t
	}

	if err := database.DB.Save(&kemahasiswaan).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update kemahasiswaan",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message":       "Kemahasiswaan updated successfully",
		"kemahasiswaan": kemahasiswaan,
	})
}

func DeleteKemahasiswaan(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID kemahasiswaan is required",
		})
	}
	var kemahasiswaan models.Kemahasiswaan

	if err := database.DB.Where("id =?", id).First(&kemahasiswaan).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Kemahasiswaan not found",
		})
	}

	if err := database.DB.Delete(&kemahasiswaan).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete kemahasiswaan",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message":       "Kemahasiswaan deleted successfully",
		"kemahasiswaan": kemahasiswaan,
	})
}