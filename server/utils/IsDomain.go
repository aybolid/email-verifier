package utils

import "regexp"

func IsDomain (domain string) bool {
	pattern := `^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+(?:[a-zA-Z]{2,})$`
	reg := regexp.MustCompile(pattern)
	
	return reg.MatchString(domain)
}