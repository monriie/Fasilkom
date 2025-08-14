package models

import (
	"time"

	"gorm.io/gorm"
)

type Akademik struct {
	gorm.Model
	CoverAkademik string    `json:"coverakademik" gorm:"not null"`
	Tanggal       time.Time `json:"tanggal" gorm:"not null"`
	Deskripsi     string    `json:"deskripsi" gorm:"not null"`
	PostedAt      time.Time `json:"posted_at"`
}
