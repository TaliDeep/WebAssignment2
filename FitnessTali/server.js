//require('dotenv').config();
//require('./server/db');
const bodyParser = require('body-parser');

const express = require('express');
const jwt = require('jsonwebtoken');
const http = require('http');
const path = require('path');
var routesApi = require('./app_api/routes/index');
const app = express();
const server = http.createServer(app);

var MongoClient = require('mongodb').MongoClient, assert = require('assert');
// Connection URL
var url = 'mongodb://localhost:27017/Fitness';
// Use connect method to connect to the server
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server!");
  db.close();
});


const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/dist/FitnessTali'));

app.use("/api",routesApi);

app.get("/",function(req,res){
    console.log("modtaget");
})
app.all('*', function(req, res) {
    res.status(200).sendFile(__dirname + '/dist/FitnessTali/index.html');
    console.log(req.body);
  });

server.listen(port,()=> console.log('Running...'));

module.exports = app;