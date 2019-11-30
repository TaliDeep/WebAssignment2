const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('User');
const Exercise = mongoose.model('exercise');
const Workout = mongoose.model('workout');

const _ = require('lodash');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);


    });
}

module.exports.exercise = (req, res, next) => {
    var exercise = new Exercise();
    exercise.exercise = req.body.exercise;
    exercise.workoutID = req.body.workoutID;
    exercise.description = req.body.description;
    exercise.sets = req.body.sets;
    exercise.repetitions = req.body.repetitions;

    exercise.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });
}

module.exports.workout = (req, res, next) => {
    console.log(req.body);
    var workout = new Workout();
    workout.workout = req.body.workout;

    workout.save((err, doc) => {
        if (!err)
            res.send(doc);
        else
            return next(err);
    });
}

module.exports.authenticate = (req, res, next) => {
    // den kalder for passport authentication
    passport.authenticate('local', (err, user, info) => {
        if (err)
            return res.status(400).json(err);
        else if (user) {
            return res.status(200).json({ "token": user.generateJwt() });
        }
        else { return res.status(404).json(info); }
    })(req, res);
}

module.exports.userProfile = (req, res, next) => {
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record er ikke fundet' });
            else
                return res.status(200).json({ status: true, user: _.pick(user, ['username']) });

        }
    );
}
module.exports.exerciseData = (req, res, next) => {
    Exercise.find({},
        (err, exercise) => {
            if (!exercise)
                return res.status(404).json({ status: false, message: 'Exercise record er ikke fundet' });
            else {
                return res.status(200).json({ status: true, exercise: _.add(exercise) });
            }

        }
    );
}  

module.exports.workoutData = (req, res, next) => {
    Workout.find({},
        (err, workout) => {
            if (!workout)
                return res.status(404).json({ status: false, message: 'Workout record er ikke fundet' });
            else {
                return res.status(200).json({ status: true, workout: _.add(workout) });
            }

        }
    );
}  
