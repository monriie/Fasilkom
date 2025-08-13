package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func akademikRoutes(api fiber.Router) {
	akademik := api.Group("/akademik")
	akademik.Post("/", middlewares.Auth, controllers.CreateAkademik)
	akademik.Get("/", controllers.GetAkademik)
	akademik.Patch("/:id", middlewares.Auth, controllers.UpdateAkademik)
	akademik.Delete("/:id", middlewares.Auth, controllers.DeleteAkademik)
}