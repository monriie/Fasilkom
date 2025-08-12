package routes

import (
	"redesign_kel3/controllers"
	"redesign_kel3/middlewares"

	"github.com/gofiber/fiber/v2"
)

func adminRoutes(api fiber.Router) {
	admin := api.Group("/admin")
	admin.Post("/signup", controllers.SignUp)
	admin.Post("/login", controllers.Login)
	admin.Post("/sync-programstudi", middlewares.Auth, controllers.SyncProgramStudiCache)
	admin.Post("/logout", middlewares.Auth, controllers.Logout)
}
