// Dependencies
var express = require("express");
var path = require("path");

// Setting up Express App
var app = express();
var PORT = 3000;

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var reservations = [
  {
    // Data goes here
  }
];

// Routing
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
