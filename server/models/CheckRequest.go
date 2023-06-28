package models

type CheckRequest struct {
	ToCheck []string `json:"to_check"`
}