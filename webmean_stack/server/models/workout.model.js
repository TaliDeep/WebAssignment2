const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    workout: {
        type: String,
        required: "Workout must have a name"
    }
});

mongoose.model('workout', workoutSchema);