package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func agendaRoutes(api fiber.Router) {
	agenda := api.Group("/agenda")
	agenda.Post("/", middlewares.Auth, controllers.CreateAgenda)
	agenda.Get("/", controllers.GetAgenda)
	agenda.Patch("/:id", middlewares.Auth, controllers.UpdateAgenda)
	agenda.Delete("/:id", middlewares.Auth, controllers.DeleteAgenda)
}