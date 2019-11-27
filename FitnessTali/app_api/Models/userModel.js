const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var dbURI = 'mongodb://localhost:27017/Fitness';
mongoose.connect(dbURI);

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  saltSecret: {type:String}
});

UserSchema.pre('save', function (next) {

  let user = this;

  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        user.saltSecret = salt;

        next()
      })
    })
  } else {
    next()
  }
});



UserSchema.method.verifyPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


userSchema.methods.generateJwt = function () {
  return jwt.sign({
    _id: this._id
  }, process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXP
    });
}

const User = mongoose.model('usersDB', UserSchema);

module.exports = User;  