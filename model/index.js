require('dotenv').config()
const axios = require('axios');
// const APIKEY = require('../server/config.js');
const APIKEY = process.env


// let apiURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'
const apiURL = process.env.API_URL
console.log('testing new API', apiURL)
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
  }).catch((err) => {
    console.log('error getting related product ids')
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
  return axios.get(apiURL + `/qa/questions/?product_id=${req.params.id}&count=2000`, {headers: {'Authorization': APIKEY.APIKEY}})
    .then((APIRes)=>{
      res.send(APIRes.data);
      logInteraction(bodyParams);
    })
    .catch((err)=>{console.log('getQuestions error:', err)})
}

const getAnswers  = (req, res, bodyParams) => {
  return axios.get(apiURL + `/qa/questions/${req.params.id}/answers`, {headers: {'Authorization': APIKEY.APIKEY}})
    .then((APIRes)=>{
      res.send(APIRes.data);
      logInteraction(bodyParams);
    })
    .catch((err)=>{console.log('getAnswers error:', err)})
}

const postQuestion = (req, res, bodyParams) => {
  return axios.post(apiURL + '/qa/questions', req, {headers: {'Authorization': APIKEY.APIKEY}})
    .then((apiRes) => {
      console.log('successfully posted question :', apiRes.data);
      logInteraction(bodyParams);
    })
    .catch((err) => {
      console.log('err in posting question :', err);
    })
}

const postAnswer = (req, res, bodyParams) => {
  return axios.post(apiURL + `/qa/questions/${req.params.id}/answers`, req.body, {headers: {'Authorization': APIKEY.APIKEY}})
    .then((apiRes) => {
      console.log('successfully posted question :', apiRes.data);
      logInteraction(bodyParams);
    })
    .catch((err) => {
      console.log('err in posting question :', err);
    })
}



// put requests for helpful / reported questions

const putHelpfulQuestion = (req, res, bodyParams) => {
  return axios.put(apiURL + `/qa/questions/${req.params.id}/helpful`, '', {headers: {'Authorization': APIKEY.APIKEY}})
    .then((apiRes) => {
      console.log('successfully marked question helpful:', apiRes.data);
      logInteraction(bodyParams);
    })
    .catch((err) => {
      console.log('err in marking question helpful:', err);
    })
}

const putReportQuestion = (req, res, bodyParams) => {
  return axios.put(apiURL + `/qa/questions/${req.params.id}/report`, '', {headers: {'Authorization': APIKEY.APIKEY}})
  .then((apiRes) => {
    console.log('successfully reported question :', apiRes.data);
    logInteraction(bodyParams);
  })
  .catch((err) => {
    console.log('err in reporting question :', err);
  })
}

// for helpful/reported answers
const putHelpfulAnswer = (req, res, bodyParams) => {
  return axios.put(apiURL + `/qa/answers/${req.params.id}/helpful`, '', {headers: {'Authorization': APIKEY.APIKEY}})
    .then((apiRes) => {
      console.log('successfully marked answer helpful:', apiRes.data);
      logInteraction(bodyParams);
    })
    .catch((err) => {
      console.log('err in marking answer helpful:', err);
    })
}

const putReportAnswer = (req, res, bodyParams) => {
  return axios.put(apiURL + `/qa/answers/${req.params.id}/report`, '', {headers: {'Authorization': APIKEY.APIKEY}})
  .then((apiRes) => {
    console.log('successfully reported answer :', apiRes.data);
    logInteraction(bodyParams);
  })
  .catch((err) => {
    console.log('err in reporting answer :', err);
  })
}
//



module.exports.getAllProducts = getAllProducts
module.exports.getProductStyles = getProductStyles
module.exports.getRelatedProductIds = getRelatedProductIds
module.exports.getAllRelatedProductDetails = getAllRelatedProductDetails
module.exports.getAllReviewScores = getAllReviewScores
module.exports.getQuestions = getQuestions
module.exports.getAnswers = getAnswers
module.exports.postQuestion = postQuestion
module.exports.postAnswer = postAnswer
module.exports.putHelpfulQuestion = putHelpfulQuestion
module.exports.putReportQuestion = putReportQuestion
module.exports.putHelpfulAnswer = putHelpfulAnswer
module.exports.putReportAnswer = putReportAnswer
module.exports.getProductsOnId = getProductsOnId;
