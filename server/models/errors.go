package models

type Error struct {
	Message string `json:"message"`
}

type HintError struct {
	Message string `json:"message"`
	Hint    string `json:"hint"`
}