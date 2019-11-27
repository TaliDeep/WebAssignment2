const User = require('../Models/userModel.js');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');
module.exports.login = async function (req, res) {
  User.find({ username: req.body.username })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(404).json({
          message: 'Auth Failed'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if(err){
          return res.status(401).json({
            message: 'Auth failed'
          });
        }
        if(result){
          jwt.sign({
            username: user[0].username,
            userId: user[0]._id
          }, process.env.jwt,
          {
            expiresIn:"1h"
          }
          
          );
          return res.status(200).json({
            message: 'Auth succesful'
          });
        }
        res.status(401).json({
          message: 'Auth failed',
          token: token
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}


module.exports.signup = (req, res, next) => {
  console.log(req.body);
  User.create(req.body);
  User.save((err,doc) =>{
    if(!err)
      res.send(doc);
    else{
      if(err.code = 11000)
        res.status(422).send(['Duplicate email adrress found.']);
        else  
          return next(err);
    }
  });
}

module.exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate('local', (err, user, info) => {
      // error from passport middleware
      if (err) return res.status(404).json(err);
      // registered user
      if (user) return res.status(200).json({ "token": user.generateJwt() });
      // unknown user or wrong password
      else return res.status(401).json(info);
  })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
  User.findOne({ _id: req._id },
      (err, user) => {
          if (!user)
              return res.status(404).json({ status: false, message: 'User record not found.' });
          else
              return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
      }
  );
}