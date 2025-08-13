package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func beasiswaRoutes(api fiber.Router) {
	beasiswa := api.Group("/beasiswa")
	beasiswa.Post("/", middlewares.Auth, controllers.CreateBeasiswa)
	beasiswa.Get("/", controllers.GetBeasiswa)
	beasiswa.Patch("/:id", middlewares.Auth, controllers.UpdateBeasiswa)
	beasiswa.Delete("/:id", middlewares.Auth, controllers.DeleteBeasiswa)
}