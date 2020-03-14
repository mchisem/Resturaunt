// Dependencies
var express = require("express");
var path = require("path");

// Setting up Express App
var app = express();
var PORT = 3000;

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Data
var reservations = [
  {
    // Data goes here
  }
];

// Routing
//Home Route//
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
//Reserve Table Route//
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

//waitlist Route//
app.get("/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

//API Routes go here
app.get("/api/", function(req, res){
  res.json()
});

app.get("/api/", function(req, res){
  res.json()
});

//Post Requests//
app.post("/api/", function(req, res) {

  
})

//Port is listening//
app.listen(PORT, () => {
  console.log("App is listening at PORT:" + PORT)
})