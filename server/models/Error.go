package models

type Error struct {
	Message string `json:"message"`
	Hint string `json:"hint"`
}