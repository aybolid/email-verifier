package handlers

import (
	"emailverifier/models"
	"emailverifier/utils"
	"emailverifier/utils/checks"
	"encoding/json"
	"net/http"
)

func VerifyOne(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var email string
	json.NewDecoder(r.Body).Decode(&email)

	if email == "" {
		err := models.HintError{Message: "Email is empty", Hint: "Provide an email"}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(err)
	}

	domain := utils.ExtractDomain(email)

	format := checks.IsValidFormat(email)
	mx, mxRecords, _ := checks.HasMX(domain)
	spf, spfRecord, _ := checks.HasSPF(domain)
	dmarc, dmarcRecord, _ := checks.HasDMARC(domain)


	response := models.OneEmailRes{
		Email: email, 
		Domain: domain, 
		Format: format,
		DNS: &models.DNS{
			MX: &models.MX{
				Status: mx,
				Records: mxRecords,
			},
			SPF: &models.SPF{
				Status: spf,
				Record: spfRecord,	
			},
			DMARC: &models.DMARC{
				Status: dmarc,
				Record: dmarcRecord,
			},
		},
	}
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}
