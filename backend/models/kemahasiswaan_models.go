package models

import (
	"time"

	"gorm.io/gorm"
)

type Kemahasiswaan struct {
	gorm.Model
	Coverkemahasiswaan string    `json:"coverkemahasiswaan" gorm:"not null"`
	Deskripsi          string    `json:"deskripsi" gorm:"not null"`
	PostedAt           time.Time `json:"posted_at"`
}
