const axios = require('axios');
const APIKEY = require('../server/config.js');

let apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'

// ALL INTERACTIONS METHOD

const logInteraction = (bodyParams) => {
  axios.post(apiURL + '/interactions', bodyParams, {
    headers: {'Authorization': APIKEY.APIKEY}
  })
  .then((apiRes) => {
    console.log('successfully logged interaction :', apiRes.data)
  })
  .catch((err) => {
    console.log('err in logInteractions :', err)
  })
}

// PRODUCTS

const getAllProducts = (req, res, bodyParams) => {
  axios.get(apiURL + '/products', {headers: {'Authorization': APIKEY.APIKEY}})
  .then((APIRes) => {
    res.send(APIRes.data)
    logInteraction(bodyParams)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

const getProductStyles = (req, res, bodyParams) => {
  axios.get(apiURL + `/products/${req.params.id}/styles`, {headers: {'Authorization': APIKEY.APIKEY}})
  .then((APIRes) => {
    res.send(APIRes.data)
    logInteraction(bodyParams)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

// REVIEWS



module.exports.getAllProducts = getAllProducts
module.exports.getProductStyles = getProductStyles