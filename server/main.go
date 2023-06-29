package main

import (
	"emailverifier/handlers"
	"fmt"
	"log"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins:	[]string{"*"},
		AllowedMethods: []string{"POST"},
		AllowedHeaders: []string{"Content-Type"},
	})

	router := mux.NewRouter()
	routerHandler := c.Handler(router)

	router.HandleFunc("/api", handlers.CheckAll).Methods("POST")

	port := ":8080"
	fmt.Printf("Server is running on port %v\n", strings.TrimLeft(port, ":"))
	log.Fatal(http.ListenAndServe(port, routerHandler))
}