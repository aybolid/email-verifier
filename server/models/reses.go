package models

import "net"

type OneEmailRes struct {
	Email string `json:"email"`
	Domain string `json:"domain"`
	Format bool `json:"format"`
	DNS *DNS `json:"dns"`
}

type SeveralEmailsRes struct {
	Emails []string `json:"emails"`
	Results []OneEmailRes `json:"results"`
}

type DNS struct {
	MX *MX `json:"mx"`
	SPF *SPF `json:"spf"`
	DMARC *DMARC `json:"dmarc"`
}
type MX struct {
	Status bool `json:"status"`
	Records []*net.MX `json:"records"`
}
type SPF struct {
	Status bool `json:"status"`
	Record string `json:"record"`
}
type DMARC struct {
	Status bool `json:"status"`
	Record string `json:"record"`
}