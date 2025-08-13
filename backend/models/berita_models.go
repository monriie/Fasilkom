package models

import (
	"time"

	"gorm.io/gorm"
)

type Berita struct {
	gorm.Model
	CoverBerita string    `json:"coverberita" gorm:"not null"`
	PostedAt    time.Time `json:"posted_at"`
}
