package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func beritaRoutes(api fiber.Router) {
	berita := api.Group("/berita")
	berita.Post("/", middlewares.Auth, controllers.CreateProgramStudi)
	berita.Get("/", controllers.GetProgramStudi)
	berita.Patch("/:id", middlewares.Auth, controllers.UpdateProgramStudi)
	berita.Delete("/:id", middlewares.Auth, controllers.DeleteProgramStudi)
}