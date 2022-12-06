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

app.get('/averageReviews/:id', (req, res) => {
  let bodyParams = {
    'element': 'PI1A.jsx Overview/Product_Info',
    'widget': 'Overview',
    'time': new Date()
  }
  // call model for getting reviews

  // then manipulate data with reviews algo
})

app.get('/products/:product_id/related', async (req, res) => {
  let relatedIds = await model.getRelatedProductIds(req, res);
  data = await model.getAllRelatedProductDetails(relatedIds);
  res.send(data);
})

app.listen(3001);
console.log('Listening on port 3001');


// HELPER FUNCTIONS =========== =============== ================ ============ ============= =========

let averageReviewsAlgo = () => {
  // takes in all reviews

  // add them all, divide by # of reviews (maybe use reduce or map in a cool way?)

  // round to nearest 0.25
    // could instead return two whole numbers, the first indicating 0-4 stars, the second indicating 1-5 (fullness of additional star)
    // get the remainder by subtracting total from math.floor()
    // multiply remainder by 4
      // if product is greater than 3.5,
        // +1 the first number (round up to next star!)
      // else
        // math.floor(), set second num equal to this integer
}