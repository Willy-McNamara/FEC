const axios = require('axios');
const APIKEY = require('../server/config.js');

// all our API calls

// PRODUCTS

let productsURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products'

const getAllProducts = (req, res) => {
  axios.get(productsURL, {headers: {'Authorization': APIKEY.APIKEY}})
  .then((APIRes) => {
    res.send(APIRes.data)
  })
  .catch((err) => {
    res.status(400).send(err)
  })
}

module.exports.getAllProducts = getAllProducts