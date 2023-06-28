package checks

import "net"

func MX(domain string) (bool, error) {
	hasMX := false
	mxRecords, err := net.LookupMX(domain)

	if len(mxRecords) > 0 { hasMX = true }

	return hasMX, err
}