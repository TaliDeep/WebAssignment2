var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/controllerLocations');
var users = require('../controllers/userController.js');


// var jwt = require('express-jwt');
// var auth = jwt({
// secret: process.env.JWT_SECRET,
// userProperty: 'payload'
// });


router.post('/login', users.login);

router.post('/signup', users.signup);
router.post('/authenticate', users.authenticate);

router.get('/userProfile',fun1, users.userProfile);

router.post('/', (req, res) => res.status(200).json({message: 'Hello World!'}));



router.all('/*', function (req, res) {
    console.log(req.body)
  });
  
  module.exports = router;
  