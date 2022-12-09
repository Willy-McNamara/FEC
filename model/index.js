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

//Takes a product id and returns a singular object with product details.
const getProductsOnId = async (productId) => {
  let productDetail = await axios.get(apiURL + `/products/${productId}`, {headers: {'Authorization': APIKEY.APIKEY}})
  .then((itemData) => {
    return itemData.data;
  });
  return productDetail;
}

//returns an array of ids related to product.
const getRelatedProductIds = async (req, res) => {
  let relatedIds = await axios.get(apiURL + `/products/${req.params.product_id}/related`, {headers: {'Authorization': APIKEY.APIKEY}})
  .then((data) => {
    return data.data;
  })
  return relatedIds;
}

const getAllRelatedProductDetails = async (arrayOfRelatedIds) => {
  allDetails = await Promise.all(arrayOfRelatedIds.map(async (id) => {
    return getProductsOnId(id);
  }))

  return allDetails;

}
// REVIEWS
const getAllReviewScores = (req, res, bodyParams) => {
  return axios.get(apiURL + `/reviews/meta/?product_id=${req.params.id}`, {headers: {'Authorization': APIKEY.APIKEY}})
  .then((APIRes)=>{
    return(APIRes.data)
  })
  .catch((err)=>{console.log('err in getAllReviewScores', err)})
}

// Questions
const getQuestions  = (req, res, bodyParams) => {
  return axios.get(apiURL + `/qa/questions/?product_id=${req.params.id}`, {headers: {'Authorization': APIKEY.APIKEY}})
    .then((APIRes)=>{
      res.send(APIRes.data);
      logInteraction(bodyParams);
    })
    .catch((err)=>{console.log('getQuestions error:', err)})
}



module.exports.getAllProducts = getAllProducts
module.exports.getProductStyles = getProductStyles
module.exports.getRelatedProductIds = getRelatedProductIds
module.exports.getAllRelatedProductDetails = getAllRelatedProductDetails
module.exports.getAllReviewScores = getAllReviewScores
module.exports.getQuestions = getQuestions
module.exports.getProductsOnId = getProductsOnId;