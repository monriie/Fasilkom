package models

import (
	"time"

	"gorm.io/gorm"
)

type Agenda struct {
	gorm.Model
	CoverAgenda string    `json:"coveragenda" gorm:"not null"`
	Deskripsi   string    `json:"deskripsi" gorm:"not null"`
	PostedAt    time.Time `json:"posted_at"`
}
