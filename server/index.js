const express = require('express');
// const APIKEY = require('./config.js');
const model = require('../model/index.js');
const cors = require('cors');

const app = express();


// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname + '/../public'))

// app.use((req, res) => {
//   req.set('Authorization', `${APIKEY.APIKEY}`)
// }) // some middleware that adds headers

app.get('/products', (req, res) => {
  model.getAllProducts(req, res)
  // .catch((err) => {
  //   console.log('error in app.get/products :', err)
  //   res.status(400).send(err)
  // })
})


app.listen(3001);
console.log('Listening on port 3001');