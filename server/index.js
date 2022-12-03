const express = require('express');
// const APIKEY = require('./config.js');
const model = require('../model/index.js');
const cors = require('cors');

const app = express();


// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/../public'))


// ROUTES / CONTROLLERS

app.get('/products', (req, res) => {
  let bodyParams = {
    'element': 'index.jsx',
    'widget': 'app',
    'time': new Date()
  }
  model.getAllProducts(req, res, bodyParams)
})

app.get('/productStyles/:id', (req, res) => {
  let bodyParams = {
    'element': 'Overview.jsx',
    'widget': 'Overview',
    'time': new Date()
  }
  model.getProductStyles(req, res, bodyParams)
})


app.listen(3001);
console.log('Listening on port 3001');