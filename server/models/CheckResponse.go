package models

type CheckAllResponse struct {
	Domain   string   `json:"domain"`
	IsOk     bool     `json:"is_ok"`
	Has      *Has     `json:"has"`
	Records  *Records `json:"records"`
}

type Has struct {
	MX bool `json:"mx"`
	SPF bool `json:"spf"`
	DMARC bool `json:"dmarc"`
}

type Records struct {
	DMARC string `json:"dmarc"`
	SPF   string `json:"spf"`
}