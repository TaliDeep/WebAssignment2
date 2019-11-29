const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: "An Exercise must have a name"
    },
    workoutID: {
        type: String
    },
    description: {
        type: String
    },
    sets: {
        type: String
    },
    repetitions: {
        type: String
    }
});




mongoose.model('exercise', exerciseSchema);