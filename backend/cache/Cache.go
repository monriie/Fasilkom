package cache

import (
	"time"

	"github.com/patrickmn/go-cache"
)

var programstudiCache = cache.New(5*time.Minute, 10*time.Minute)
var agendaCache = cache.New(5*time.Minute, 10*time.Minute)
var beritaCache = cache.New(5*time.Minute, 10*time.Minute)
var akademikCache = cache.New(5*time.Minute, 10*time.Minute)
var beasiswaCache = cache.New(5*time.Minute, 10*time.Minute)
var kemahasiswaanCache = cache.New(5*time.Minute, 10*time.Minute)

func GetProgramStudiCache(key string) (interface{}, bool) {
	return programstudiCache.Get(key)
}
func SetProgramStudiCache(key string, data interface{}) {
	programstudiCache.Set(key, data, cache.DefaultExpiration)
}
func InvalidateProgramStudiCache() {
	programstudiCache.Flush()
}


func GetAgendaCache(key string) (interface{}, bool) {
	return agendaCache.Get(key)
}
func SetAgendaCache(key string, data interface{}) {
	agendaCache.Set(key, data, cache.DefaultExpiration)
}
func InvalidateAgendaCache() {
	agendaCache.Flush()
}


func GetBeritaCache(key string) (interface{}, bool) {
	return beritaCache.Get(key)
}
func SetBeritaCache(key string, data interface{}) {
	beritaCache.Set(key, data, cache.DefaultExpiration)
}
func InvalidateBeritaCache() {
	beritaCache.Flush()
}


func GetAkademikCache(key string) (interface{}, bool) {
	return akademikCache.Get(key)
}
func SetAkademikCache(key string, data interface{}) {
	akademikCache.Set(key, data, cache.DefaultExpiration)
}
func InvalidateAkademikCache() {
	akademikCache.Flush()
}


func GetBeasiswaCache(key string) (interface{}, bool) {
	return beasiswaCache.Get(key)
}
func SetBeasiswaCache(key string, data interface{}) {
	beasiswaCache.Set(key, data, cache.DefaultExpiration)
}
func InvalidateBeasiswaCache() {
	beasiswaCache.Flush()
}


func GetKemahasiswaanCache(key string) (interface{}, bool) {
	return kemahasiswaanCache.Get(key)
}
func SetKemahasiswaanCache(key string, data interface{}) {
	kemahasiswaanCache.Set(key, data, cache.DefaultExpiration)
}
func InvalidateKemahasiswaanCache() {
	kemahasiswaanCache.Flush()
}
