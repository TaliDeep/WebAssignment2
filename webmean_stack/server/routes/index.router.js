const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/exercise', ctrlUser.exercise);
router.post('/workout', ctrlUser.workout);

router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/exercise', jwtHelper.verifyJwtToken, ctrlUser.exerciseData);
router.get('/workout', jwtHelper.verifyJwtToken, ctrlUser.workoutData);

module.exports = router;