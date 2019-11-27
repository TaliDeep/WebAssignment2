//require('dotenv').config();
//require('./server/db');
require('./app_api/config/passportConfig');
const bodyParser = require('body-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const http = require('http');
const path = require('path');
var routesApi = require('./app_api/routes/index.js');
const app = express();
const server = http.createServer(app);
const passport = require('passport');



var MongoClient = require('mongodb').MongoClient, assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/Fitness';
// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server!");
  db.close();
});


const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(express.static(__dirname + '/dist/FitnessTali'));


app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ "message": err.name + ": " + err.message });
  }
});



app.use("/api", routesApi);

app.get("/", function (req, res) {
  console.log(req.body);
})
app.all('*', function (req, res) {
  res.status(200).sendFile(__dirname + '/dist/FitnessTali/index.html');
});

server.listen(port, () => console.log('Running...'));

module.exports = app;