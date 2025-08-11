package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func programstudiRoutes(api fiber.Router) {
	programstudi := api.Group("/programstudi")
	programstudi.Post("/", middlewares.Auth, controllers.CreateProgramStudi)
	programstudi.Get("/", controllers.GetProgramStudi)
	programstudi.Patch("/:id", middlewares.Auth, controllers.UpdateProgramStudi)
	programstudi.Delete("/:id", middlewares.Auth, controllers.DeleteProgramStudi)
}