const mongoose = require('mongoose');

var dbURI = 'mongodb://localhost:27017/Fitness';
mongoose.connect(dbURI);




mongoose.connect(dbURI, (err) => {
    if(!err)
        console.log('MongoDB connection succeeded.');
    else {
        console.log('Error in DB connection:' + JSON.stringify(err, undefined,2));
    }
    });

    module.exports = mongoose;