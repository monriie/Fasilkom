package cache

import (
	"time"

	"github.com/patrickmn/go-cache"
)

var programstudiCache = cache.New(5*time.Minute, 10*time.Minute)

func GetProgramStudiCache(key string) (interface{}, bool) {
	return programstudiCache.Get(key)
}

func SetProgramStudiCache(key string, data interface{}) {
	programstudiCache.Set(key, data, cache.DefaultExpiration)
}

func InvalidateProgramStudiCache() {
	programstudiCache.Flush()
}
