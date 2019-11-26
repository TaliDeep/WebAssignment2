const User = require('../Models/userModel.js');






  module.exports.register = async function (req, res) {
    console.log(req.body);
    User.create(req.body);

  }