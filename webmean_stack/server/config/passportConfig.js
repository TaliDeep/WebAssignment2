const passport = require('passport');
const localStrategy = require('passport-local');
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStrategy({ usernamefield: 'username' },
        (username, passport, done) => {
            User.findOne({ username: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    else if (!user)
                        return done(null, false, { message: 'Username is not registered' });
                    else if (!user.verifyPassword(passport))
                        return done(null, false, { message: 'wrong passowrd.' });
                    else
                        return done(null, user);
                })
        })
)