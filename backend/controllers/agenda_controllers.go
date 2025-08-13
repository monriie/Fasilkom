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

func GetAgenda(c *fiber.Ctx) error {
	limit := c.Query("limit")

	cacheKey := "agenda_all"
	if limit != "" {
		cacheKey += "_" + limit
	}

	if cached, found := cache.GetAgendaCache(cacheKey); found {
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"agenda": cached,
			"cache":  true,
		})
	}

	var agenda []models.Agenda
	query := database.DB.Model(&models.Agenda{}).Where("posted_at <= ?", time.Now()).Order("posted_at DESC")

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&agenda).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Agenda not found",
		})
	}

	cache.SetAgendaCache(cacheKey, agenda)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"agenda": agenda,
		"cache":  false,
	})
}

func CreateAgenda(c *fiber.Ctx) error {
	var agenda models.Agenda

	cover, err := utils.SaveFile(c, "coveragenda", false)
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
		agenda.PostedAt = t
	} else {
		agenda.PostedAt = time.Now()
	}

	agenda.CoverAgenda = cover
	agenda.Deskripsi = deskripsi

	if err := database.DB.Create(&agenda).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save agenda",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "Agenda created successfully",
		"agenda":  agenda,
	})
}

func UpdateAgenda(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID agenda is required",
		})
	}
	var agenda models.Agenda

	if err := database.DB.Where("id =?", id).First(&agenda).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Agenda not found",
		})
	}

	if deskripsi := c.FormValue("deskripsi"); deskripsi != "" {
		agenda.Deskripsi = deskripsi
	}

	if _, err := c.FormFile("coveragenda"); err == nil {
		cover, err := utils.SaveFile(c, "coveragenda", false)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": err,
			})
		}
		agenda.CoverAgenda = cover
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		agenda.PostedAt = t
	}

	if err := database.DB.Save(&agenda).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update agenda",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Agenda updated successfully",
		"agenda":  agenda,
	})
}

func DeleteAgenda(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "ID agenda is required",
		})
	}
	var agenda models.Agenda

	if err := database.DB.Where("id =?", id).First(&agenda).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"error": "Agenda not found",
		})
	}

	if err := database.DB.Delete(&agenda).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to delete agenda",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Agenda deleted successfully",
		"agenda":  agenda,
	})
}