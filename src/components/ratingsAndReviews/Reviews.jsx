import React, { useState, useEffect } from 'react';
import ReviewsSummary from './components/ReviewsSummary.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import axios from 'axios';

//WHY IS THIS RENDERING TWICE????
//HOW to effectively investigate this?

const Reviews = ({product}) => {
// console.log('product from Reviews.jsx', product) //logs twice...
  const [reviewMetaData, setReviewMetaData] = useState('init')

  useEffect(() => {
    if(reviewMetaData === 'init') {
      axios.get(`reviews/meta/${product.id}`)
      .then((res)=>{setReviewMetaData(res.data)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
      // console.log('I FIRE ONCE')
    }

  }, [reviewMetaData]);

  return (
    <div className="border">
      <h6>Ratings & Reviews</h6>
      <div className="flex border">
      <ReviewsSummary reviewMetaData={reviewMetaData}/>
      <ReviewsList product={product}/>
      </div>
    </div>
  )
}

export default Reviews;
