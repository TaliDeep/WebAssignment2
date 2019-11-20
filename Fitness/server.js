const express = require('express');
const http = require('http');
const path = require('path');
var routesApi = require('./app_api/routes/index');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/Fitness'));
app.use('/api', routesApi);
app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));
const server = http.createServer(app);

server.listen(port,()=> console.log('Running...'));