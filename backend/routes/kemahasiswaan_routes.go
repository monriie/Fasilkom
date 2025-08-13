package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func kemahasiswaanRoutes(api fiber.Router) {
	kemahasiswaan := api.Group("/kemahasiswaan")
	kemahasiswaan.Post("/", middlewares.Auth, controllers.CreateKemahasiswaan)
	kemahasiswaan.Get("/", controllers.GetKemahasiswaan)
	kemahasiswaan.Patch("/:id", middlewares.Auth, controllers.UpdateKemahasiswaan)
	kemahasiswaan.Delete("/:id", middlewares.Auth, controllers.DeleteKemahasiswaan)
}