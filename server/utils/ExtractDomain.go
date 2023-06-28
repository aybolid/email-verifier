package utils

import ("strings")

func ExtractDomains(slice []string) []string {
	var domains []string
	seenDomains := make(map[string]bool)

	for _, s := range slice {
		if strings.Contains(s, "@") {
			s = GetDomainFromEmail(s)
		}

		if seenDomains[s] || !IsDomain(s) {
			continue
		}

		domains = append(domains, s)
		seenDomains[s] = true
	}

	return domains
}