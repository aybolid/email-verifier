package utils

import (
	"regexp"
	"strings"
)

func ExtractDomain(email string) string {
	parts := strings.Split(email, "@")

	if len(parts) == 2 {
		emailDomainRegex := `^[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$`
		match, _ := regexp.MatchString(emailDomainRegex, parts[1])
		if match {
			return parts[1]
		}
	}

	return ""
}