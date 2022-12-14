const express = require('express');
// const APIKEY = require('./config.js');
const model = require('../model/index.js');
const cors = require('cors');
const reviewsRoute = require('./routes/reviews.js')
const app = express();


// MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(__dirname + '/../public'))
app.use('/reviews', reviewsRoute)

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
    res.send(calcRatingAverages(totalRatings.ratings))
  })
  .catch((err)=>{console.log('error getting reviews in api', err);
  res.send(err)
})
  // then manipulate data with reviews algo
})

app.get('/products/:product_id/related', async (req, res) => {
  let relatedIds = await model.getRelatedProductIds(req, res);
  data = await model.getAllRelatedProductDetails(relatedIds);
  res.send(data);
})

app.get('/products/:product_id', (req, res) => {
  model.getProductsOnId(req.params.product_id)
  .then((data) => {
    res.send(data.features);
  })
})
// Questions
app.get('/qa/questions/:id', (req, res) => {
  let bodyParams = {
    'element': 'Questions.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.getQuestions(req, res, bodyParams);
})

// get answers for a question
app.get('/qa/questions/:id/answers', (req, res) => {
  let bodyParams = {
    'element': 'AnswerList.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.getAnswers(req, res, bodyParams);
})

app.post('/qa/questions', (req, res) => {
  let bodyParams = {
    'element': 'Questions.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.postQuestion(req.body, res, bodyParams);
})

//post an answer
app.post('/qa/questions/:id/answers', (req, res) => {
  let bodyParams = {
    'element': 'AnswerForm.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.postAnswer(req, res, bodyParams);
})

// mark question helpful
app.put('/qa/questions/:id/helpful', (req, res) => {
  let bodyParams = {
    'element': 'QuestionItem.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.putHelpfulQuestion(req, res, bodyParams);
})

// report question
app.put('/qa/questions/:id/report', (req, res) => {
  let bodyParams = {
    'element': 'QuestionItem.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.putReportQuestion(req, res, bodyParams);
})

// mark answer helpful
app.put('/qa/answers/:id/helpful', (req, res) => {
  let bodyParams = {
    'element': 'AnswerItem.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.putHelpfulAnswer(req, res, bodyParams);
})

// report answer
app.put('/qa/answers/:id/report', (req, res) => {
  let bodyParams = {
    'element': 'AnswerItem.jsx',
    'widget': 'Questions and Answers',
    'time': new Date()
  }
  model.putReportAnswer(req, res, bodyParams);
})

app.listen(3001);
console.log('Listening on port 3001');


// HELPER FUNCTIONS =========== =============== ================ ============ ============= =========

//returns an object containing the rating as a % as well as the raw average of the ratings.
let calcRatingAverages = (ratingsObject) => {
  // takes in all review
  // console.log('ratings object', ratingsObject)
  let totalNumOfRatings = 0
  let totalScoreOfRatings = 0;
  for (key in ratingsObject) {
    totalNumOfRatings += Number(ratingsObject[key])
    totalScoreOfRatings += Number(ratingsObject[key]) * Number(key)
  }

  //calculates rating out of 5, rounded off to 2 decimal places
  const ratingOutOf5 = (totalScoreOfRatings/totalNumOfRatings).toFixed(2)

  //outputs the raw ratings score out out of 100
  const ratingAsPercent = totalScoreOfRatings/(totalNumOfRatings * 5) * 100

  //outputs the rating score rounded off to the nearest 25%
  const ratingAsPercentRounded = (Math.round(ratingAsPercent * 4) / 4).toFixed(2)

  return {ratingOutOf5: ratingOutOf5,
    ratingAsPercentRounded: ratingAsPercentRounded
  }
}