package models

import (
	"time"

	"gorm.io/gorm"
)

type ProgramStudi struct {
	gorm.Model
	Logo       string    `json:"logo" gorm:"not null"`
	Jurusan    string    `json:"jurusan" gorm:"not null"`
	Deskripsi  string    `json:"deskripsi" gorm:"not null"`
	Akreditasi string    `json:"akreditasi" gorm:"not null"`
	Jenjang    string    `json:"jenjang" gorm:"not null"`
	PostedAt   time.Time `json:"posted_at"`
}
