import React, { useState, useEffect } from 'react';
import ReviewsSummary from './components/ReviewsSummary.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import axios from 'axios';

//capitalized file name

const Reviews = ({product}) => {
  const [reviewsList ,setReviewsList ] = useState('init');
  console.log(reviewsList);

  useEffect(() => {
    if (reviewsList === 'init') {
      axios.get(`/averageReviews/${product.id}`)
      .then((res)=>{setReviewsList(res.data)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
    }

  }, [product])

  return (
    <div className="border">
      <h6>Ratings & Reviews</h6>
      <div className="flex border">
      <ReviewsSummary />
      <ReviewsList />
      </div>
    </div>
  )
}

export default Reviews;
