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

	router.HandleFunc("/api/v1/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World"))
	}).Methods("GET")

	router.HandleFunc("/api/v1/verify-one", handlers.VerifyOne).Methods("POST")
	router.HandleFunc("/api/v1/verify-several", handlers.VerifySeveral).Methods("POST")

	port := ":8080"
	fmt.Printf("Server is running on port %v\n", strings.TrimLeft(port, ":"))
	log.Fatal(http.ListenAndServe(port, router))
}