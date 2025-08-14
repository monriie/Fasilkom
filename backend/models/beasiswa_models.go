package models

import (
	"time"

	"gorm.io/gorm"
)

type Beasiswa struct {
	gorm.Model
	Coverbeasiswa string    `json:"coverbeasiswa" gorm:"not null"`
	Deskripsi     string    `json:"deskripsi" gorm:"not null"`
	PostedAt      time.Time `json:"posted_at"`
}
