package checks

import "net"

func HasMX(domain string) (bool, []*net.MX, error) {
	hasMX := false
	mxRecords, err := net.LookupMX(domain)

	if len(mxRecords) > 0 { hasMX = true }

	return hasMX, mxRecords, err
}