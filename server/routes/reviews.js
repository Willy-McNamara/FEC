const express = require('express')
const router = express.Router()
const axios = require('axios')

const APIKEY = require('../config.js').APIKEY
let apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'

router.use(express.json())

const logInteraction = (bodyParams) => {
  axios.post(apiURL + '/interactions', bodyParams, {
    headers: {'Authorization': APIKEY}
  })
  .then((apiRes) => {
    console.log('successfully logged interaction :', apiRes.data)
  })
  .catch((err) => {
    console.log('err in logInteractions :', err)
  })
}

//be sure to go back and update log interaction args as needed

//get all reviews route
router.get('/:product_id', (req, res)=>{
// console.log('/REVIEWS GET product id', req.params.product_id)
axios.get(apiURL + `/reviews/?product_id=${req.params.product_id}`, {
  headers:
   {'Authorization': APIKEY}}
  )
  .then((data)=>{
    res.status(200).send(data.data)
    logInteraction({
      'element': 'Reviews.jsx',
      'widget': 'reviews',
      'time': new Date()
    })
  })
  .catch((err)=>{
    console.log('error in get all reviews', err)
    res.status(400).send(err)
  })
})

//this is VERY similar to the above request, but purpose is to get meta data. refactor this eventually after functionality is hit.
router.get('/meta/:product_id', (req, res)=>{
  console.log('/meta/product_id', req.params)
  axios.get(apiURL + `/reviews/meta/?product_id=${req.params.product_id}`, {
    headers:
     {'Authorization': APIKEY}}
    )
    .then((data)=>{
      res.status(200).send(data.data)
      logInteraction({
        'element': 'Reviews.jsx',
        'widget': 'reviews',
        'time': new Date()
      })
    })
    .catch((err)=>{
      console.log('error in get review metadata', err)
      res.status(400).send(err)
    })
  })

//Controller functions
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

module.exports = router