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
console.log('/REVIEWS GET product id', req.params.product_id)
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

module.exports = router