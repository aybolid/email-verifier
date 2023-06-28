package checks

import (
	"net"
	"strings"
)

func SPF(domain string) (bool, string, error) {
	hasSPF := false
	spfRecord := ""

	txtRecords, err := net.LookupTXT(domain)
	for _, record := range txtRecords {
		if strings.HasPrefix(record, "v=spf1") {
			hasSPF = true
			spfRecord = record
			break
		}
	}

	return hasSPF, spfRecord, err
}