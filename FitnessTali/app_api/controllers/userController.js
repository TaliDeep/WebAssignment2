const User = require('../Models/userModel.js');

// module.exports.register = function (req, res) {
//     const userData = new UserDB(req.body);
//     userData.save()
//       .then((user) => user.generateAuthToken())
//       .then((token) => res.status(201).json({token: token}))
//       .catch((err) => res.status(409).send(err))
//   }




// module.exports.register = async function (req, res) {
//       try{
//         console.log(req.body)

//         User.create(req.body);
//       }
//       catch(err){
//           console.log(err);
//       }
//   }

  module.exports.register = async function (req, res) {
    const user = new User(req.body);
    console.log(user);
    user.save()
      .then((user) => user.generateAuthToken())
      .then((token) => res.status(201).json({token: token}))
      .catch((err) => res.status(409).send(err))
  }