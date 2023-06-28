package main

import (
	"emailverifier/handlers"
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/api", handlers.CheckAll).Methods("POST")

	port := ":5173"
	fmt.Printf("Server is running on port %v\n", strings.TrimLeft(port, ":"))
	log.Fatal(http.ListenAndServe(port, router))
}