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

func GetAkademik(c *fiber.Ctx) error {
	limit := c.Query("limit")

	cacheKey := "akademik_all"
	if limit != "" {
		cacheKey += "_" + limit
	}

	if cached, found := cache.GetAkademikCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"akademik": cached,
			"cache":    true,
		})
	}

	var akademik []models.Akademik
	query := database.DB.Model(&models.Akademik{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&akademik).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Akademik not found",
		})
	}

	cache.SetAkademikCache(cacheKey, akademik)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"akademik": akademik,
		"cache":    false,
	})
}

func CreateAkademik(c *fiber.Ctx) error {
	var akademik models.Akademik

	// **PERBAIKAN DI SINI:** Menambahkan argumen boolean keempat (isCover)
	// false untuk isProgramStudi, true untuk isCover
	cover, err := utils.SaveFile(c, "coverakademik", false, true)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err,
		})
	}

	deskripsi := c.FormValue("deskripsi")
	tanggalStr := c.FormValue("tanggal")

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		akademik.PostedAt = t
	} else {
		akademik.PostedAt = time.Now()
	}

	if tanggalStr != "" {
		t, err := time.Parse(time.RFC3339, tanggalStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid tanggal format. Use ISO 8601 (RFC3339)",
			})
		}
		akademik.Tanggal = t
	} else {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Tanggal is required",
		})
	}

	akademik.Coverakademik = cover
	akademik.Deskripsi = deskripsi

	if err := database.DB.Create(&akademik).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save akademik",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message":  "Akademik created successfully",
		"akademik": akademik,
	})
}

func UpdateAkademik(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID akademik is required",
		})
	}
	var akademik models.Akademik

	if err := database.DB.Where("id =?", id).First(&akademik).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Akademik not found",
		})
	}

	if deskripsi := c.FormValue("deskripsi"); deskripsi != "" {
		akademik.Deskripsi = deskripsi
	}

	if tanggalStr := c.FormValue("tanggal"); tanggalStr != "" {
		t, err := time.Parse(time.RFC3339, tanggalStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid tanggal format. Use ISO 8601 (RFC3339)",
			})
		}
		akademik.Tanggal = t
	}

	// **PERBAIKAN DI SINI:** Ganti "cover" menjadi "coverakademik" dan tambahkan argumen keempat
	if _, err := c.FormFile("coverakademik"); err == nil {
		// false untuk isProgramStudi, true untuk isCover
		cover, err := utils.SaveFile(c, "coverakademik", false, true)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		akademik.Coverakademik = cover
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		akademik.PostedAt = t
	}

	if err := database.DB.Save(&akademik).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update akademik",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message":  "Akademik updated successfully",
		"akademik": akademik,
	})
}

func DeleteAkademik(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID akademik is required",
		})
	}
	var akademik models.Akademik

	if err := database.DB.Where("id =?", id).First(&akademik).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Akademik not found",
		})
	}

	if err := database.DB.Delete(&akademik).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete akademik",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message":  "Akademik deleted successfully",
		"akademik": akademik,
	})
}