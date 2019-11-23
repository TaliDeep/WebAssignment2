var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/controllerLocations');

router
    .route('/api/locations')
        .get(ctrlLocations.locationsListByDistance)
        .post(ctrlLocations.locationsCreate);
router
    .route('/api/locations/:locationid')
        .get(ctrlLocations.locationsReadOne)
        .put(ctrlLocations.locationsUpdateOne)
        .delete(ctrlLocations.locationsDeleteOne);