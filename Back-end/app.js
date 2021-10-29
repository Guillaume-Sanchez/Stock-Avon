// Require

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');


// Routes

const stockRoutes = require('./routes/stock');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.redirect('https://www.guillaume-sanchez.fr/');
  });

app.use('/api', stockRoutes);

module.exports = app;
