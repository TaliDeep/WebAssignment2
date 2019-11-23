var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var dbURI = 'mongodb://localhost:27017/Fitness';
mongoose.connect(dbURI);

