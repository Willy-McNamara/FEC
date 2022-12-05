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
  // console.log('request received from reviews.jsx', req.params)
  let bodyParams = {
    'element': 'PI1A.jsx Overview/Product_Info',
    'widget': 'Overview',
    'time': new Date()
  }
  // call model for getting reviews
  model.getAllReviewScores(req, res, bodyParams)
  .then((totalRatings)=>{
    // console.log('response from getAllReviewScores', totalRatings)
    console.log(totalRatings)
    res.send([averageReviewsAlgo(totalRatings.ratings)])
  })
  .catch((err)=>{console.log('error getting reviews in api', err);
  res.send(err)
})
  // then manipulate data with reviews algo
})


app.listen(3001);
console.log('Listening on port 3001');


// HELPER FUNCTIONS =========== =============== ================ ============ ============= =========

let averageReviewsAlgo = (ratingsObject) => {
  // takes in all review
  // console.log('ratings object', ratingsObject)
  let totalNumOfRatings = 0
  let totalScoreOfRatings = 0;
  for (key in ratingsObject) {
    totalNumOfRatings += Number(ratingsObject[key])
    totalScoreOfRatings += Number(ratingsObject[key]) * Number(key)
  }

  console.log('num of ratings', totalNumOfRatings)
  console.log('total score', totalScoreOfRatings)

  //outputs the raw ratings score out out of 100
  const ratingAsPercent = totalScoreOfRatings/(totalNumOfRatings * 5) * 100

  //outputs the rating score rounded off to the nearest 25%
  const ratingAsPercentRounded = (Math.round(ratingAsPercent * 4) / 4).toFixed(2)

  return ratingAsPercentRounded
}