package routes

import "github.com/gofiber/fiber/v2"

func RoutesList(app *fiber.App) {
	api := app.Group("/api")
	adminRoutes(api)
	programstudiRoutes(api)
	agendaRoutes(api)
	beritaRoutes(api)
	akademikRoutes(api)
	beasiswaRoutes(api)
	kemahasiswaanRoutes(api)
}