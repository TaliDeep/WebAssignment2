// Tjekker for env.
var  env = process.env.NODE_ENV || 'development';
// Den bruges til at fetch env. config
var config = require('./config.json');
var envConfig = config[env];

// Her tilføje env. config værdi
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);