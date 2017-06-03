package main

import (
	"log"

	"gopkg.in/mgo.v2"
)

//database config
const (
	MongoDBHosts = "localhost:27017"
	AuthDatabase = "admin"
	AuthUserName = "ecomdevuser"
	AuthPassword = "ecomdevuser123"
)

func main() {
	mongoDBDialInfo := &mgo.DialInfo{
		Addrs:    []string{MongoDBHosts},
		Database: AuthDatabase,
		Username: AuthUserName,
		Password: AuthPassword,
	}

	// Create a session which maintains a pool of socket connections
	// to our MongoDB.
	mongoSession, err := mgo.DialWithInfo(mongoDBDialInfo)
	if err != nil {
		log.Fatalf("CreateSession: %s\n", err)
	}

	mongoSession.SetMode(mgo.Monotonic, true)
}
