const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username may not be empty',
        unique: true
    },
    password: {
        type: String,
        required: 'Password may not be empty',
        minlength : [4,'Password have to be atleast 4 char long']
    },
    saltSecret: String
});

userSchema.pre('save', function(next){
    bcrypt.genSalt(10, ( err,salt)=>{
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });  

});

userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function() {
    return jwt.sign({_id: this._id},
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
};

mongoose.model('User', userSchema);