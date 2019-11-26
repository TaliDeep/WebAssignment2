var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/controllerLocations');
var users = require('../controllers/userController.js');


router.post('/login', users.register);
router.post('/signup', users.register);


router.post('/', (req, res) => res.status(200).json({message: 'Hello World!'}));



router.all('/*', function (req, res) {
    console.log(req.body)
  });
  
  module.exports = router;
  