package handlers

import (
	"emailverifier/models"
	"emailverifier/utils"
	"emailverifier/utils/checks"
	"encoding/json"
	"net/http"
)

type response struct {
	DomainsChecked []string                  `json:"domains_checked"`
	Results        []models.CheckAllResponse `json:"results"`
}

func CheckAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	var request models.CheckRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(models.Error{
			Message: "Invalid request payload",
			Hint:    "Provide valid JSON payload",
		})
		return
	}

	if len(request.ToCheck) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(models.Error{
			Message: "No emails/domains provided",
			Hint:    "Provide at least one email/domain. Like this: { \"to_check\": [\"email@example.com\", \"example.com\"] }",
		})
		return
	}
	if len(request.ToCheck) > 100 {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(models.Error{
			Message: "Too many emails/domains provided. Max 100",
		})
		return
	}

	domains := utils.ExtractDomains(request.ToCheck)

	results := make([]models.CheckAllResponse, len(domains))
	resultCh := make(chan models.CheckAllResponse)

	for i, domain := range domains {
		go func(d string, idx int) {
			mx, _ := checks.MX(d)
			spf, spfRecord, _ := checks.SPF(d)
			dmarc, dmarcRecord, _ := checks.DMARC(d)

			result := models.CheckAllResponse{
				Domain: d,
				IsOk:   mx && spf && dmarc,
				Has: &models.Has{
					MX:    mx,
					SPF:   spf,
					DMARC: dmarc,
				},
				Records: &models.Records{
					SPF:   spfRecord,
					DMARC: dmarcRecord,
				},
			}

			resultCh <- result
		}(domain, i)
	}

	for i := 0; i < len(domains); i++ {
		result := <-resultCh
		results[i] = result
	}

	close(resultCh)

	response := response{
		DomainsChecked: domains,
		Results:        results,
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(response)
}
