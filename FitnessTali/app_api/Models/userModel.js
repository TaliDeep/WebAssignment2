const mongoose = require('mongoose');
// const _id = require('lodash');
// const jwt = require('jsonwebtoken');

var dbURI = 'mongodb://localhost:27017/Fitness';
mongoose.connect(dbURI);

//const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
//   tokens: [{
//     access: {
//       type: String,
//       required: true
//     },
//     token: {
//       type: String,
//       required: true
//     }
//   }]
});

// UserSchema.methods.toJSON = function () {
//   const user = this;
//   const userObject = user.toObject();

//   return _.pick(userObject, ['_id', 'username'])
// };

// UserSchema.methods.generateAuthToken = function () {
//   const user = this;
//   const access = 'auth';
//   const token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET, {
//     expiresIn: '12h',
//     algorithm: 'HS256'
//   }).toString();

//   user.tokens.push({access, token});

//   return user.save().then(() => {
//     return 'JWT ' + token
//   });
// };

// UserSchema.methods.removeToken = function (token) {
//   const user = this;

//   return user.update({
//     $pull: {
//       tokens: {token}
//     }
//   })
// };

// UserSchema.statics.findByToken = function (token) {
//   const User = this;
//   let decoded;

//   try {
//     decoded = jwt.verify(token, process.env.JWT_SECRET)
//   } catch (e) {
//     return Promise.reject()
//   }

//   return User.findOne({
//     '_id': decoded._id,
//     'tokens.token': token,
//     'tokens.access': 'auth'
//   })
// };

// UserSchema.statics.findByCredentials = function (email, password) {
//   const User = this;

//   return User.findOne({email}).then((user) => {
//     if (!user) {
//       return Promise.reject()
//     }

//     return new Promise((resolve, reject) => {
//       bcrypt.compare(password, user.password, (err, res) => {
//         if (res) {
//           resolve(user)
//         } else {
//           reject()
//         }
//       });
//     });
//   });
// };

// UserSchema.pre('save', function (next) {
//   let user = this;

//   if (user.isModified('password')) {
//     bcrypt.genSalt(10, (err, salt) => {
//       bcrypt.hash(user.password, salt, (err, hash) => {
//         user.password = hash;
//         next()
//       })
//     })
//   } else {
//     next()
//   }
// });

const User = mongoose.model('usersDB', UserSchema);

module.exports = User;
