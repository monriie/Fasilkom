package models

import (
	"time"

	"gorm.io/gorm"
)

type Agenda struct {
	gorm.Model
	CoverAgenda string    `json:"coveragenda" gorm:"not null"`
	PostedAt    time.Time `json:"posted_at"`
}
