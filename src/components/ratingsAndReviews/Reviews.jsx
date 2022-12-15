import React, { useState, useEffect } from 'react';
import ReviewsSummary from './components/ReviewsSummary.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import axios from 'axios';

//WHY IS THIS RENDERING TWICE????
//HOW to effectively investigate this?
// console.log('API KEY', APIKEY)
const Reviews = ({product}) => {
// console.log('product from Reviews.jsx', product) //logs twice...
  const [reviewMetaData, setReviewMetaData] = useState('init')
  const [filterReviews, setFilterReviews] = useState([])
  console.log('filter reviews at reviews.jsx', filterReviews)

  useEffect(() => {
    if(reviewMetaData === 'init') {
      axios.get(`reviews/meta/${product.id}`)
      .then((res)=>{setReviewMetaData(res.data)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
      // console.log('I FIRE ONCE')
    }

  }, [reviewMetaData]);
  // console.log(reviewMetaData.rawData)

  return (
    <div className="border" id="reviews">
      <h6 id="reviewsSection">Ratings & Reviews</h6>
      <div className="flex border">
      <ReviewsSummary reviewMetaData={reviewMetaData} filterReviews={filterReviews} setFilterReviews={setFilterReviews}/>
      <ReviewsList product={product} metaData={reviewMetaData}/>
      </div>
    </div>
  )
}

export default Reviews;
