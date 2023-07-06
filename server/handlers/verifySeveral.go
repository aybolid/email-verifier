package handlers

import (
	"emailverifier/models"
	"emailverifier/utils"
	"emailverifier/utils/checks"
	"encoding/json"
	"fmt"
	"net/http"
)

func VerifySeveral(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var emails []string
	err := json.NewDecoder(r.Body).Decode(&emails)
	if err != nil {
		fmt.Println(err)
	}

	if len(emails) == 0 {
		err := models.HintError{Message: "No emails provided", Hint: "Provide at least one email"}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(err)
		return
	}
	if len(emails) > 50 {
		err := models.HintError{Message: "To many emails provided", Hint: "Max 50 emails"}
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(err)
		return
	}

	var results []models.OneEmailRes
	var ckeckedEmails []string;

	for _, email := range emails {
		if utils.Contains(ckeckedEmails, email) || email == "" {
			continue
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
		ckeckedEmails = append(ckeckedEmails, email)
		results = append(results, response)
	}

	response := models.SeveralEmailsRes{
		Emails: emails,
		Results: results,
	}
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}