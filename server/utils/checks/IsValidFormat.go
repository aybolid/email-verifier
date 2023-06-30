package checks

import (
	"regexp"
)

func IsValidFormat(email string) (bool) {
	emailRegex := `^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$`
	matches, _ := regexp.MatchString(emailRegex, email)

	return matches
}
