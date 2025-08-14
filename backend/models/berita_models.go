package models

import (
	"time"

	"gorm.io/gorm"
)

type Berita struct {
	gorm.Model
	Coverberita string    `json:"coverberita" gorm:"not null"`
	Deskripsi   string    `json:"deskripsi" gorm:"not null"`
	PostedAt    time.Time `json:"posted_at"`
}
