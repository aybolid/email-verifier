package checks

import (
	"net"
	"strings"
)

func HasDMARC(domain string) (bool, string, error) {
	hasDMARC := false
	dmarcRecord := ""

	txtRecords, err := net.LookupTXT("_dmarc." + domain)

	for _, record := range txtRecords {
		if strings.HasPrefix(record, "v=DMARC1") {
			hasDMARC = true
			dmarcRecord = record
			break
		}
	}

	return hasDMARC, dmarcRecord, err
}