var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/controllerLocations');
var users = require('../controllers/userController.js');

router.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}));

router.post('/login', users.register);
router.post('/signup', users.register);


router.post('/', (req, res) => res.status(200).json({message: 'Hello World!'}));



router.all('/*', function (req, res) {
    res.status(404).json({message: 'Not Found!'})
  });
  
  module.exports = router;
  