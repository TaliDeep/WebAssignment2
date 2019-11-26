const User = require('../Models/userModel.js');





  module.exports.register = async function (req, res) {
    console.log(user);
    const user = new User(req.body);

    // user.save()
    //   .then((user) => user.generateAuthToken())
    //   .then((token) => res.status(201).json({token: token}))
    //   .catch((err) => res.status(409).send(err))
  }