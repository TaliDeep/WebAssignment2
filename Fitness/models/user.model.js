const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username may not be empty'
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


mongoose.model('User', userSchema);