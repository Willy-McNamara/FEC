import React, { useState, useEffect } from 'react';
import ReviewsSummary from './components/ReviewsSummary.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import axios from 'axios';

//capitalized file name

const Reviews = ({product}) => {
  const [reviewScores ,setReviewScores ] = useState('init');
  // console.log(reviewScores);

  useEffect(() => {
    if (reviewScores === 'init') {
      axios.get(`/averageReviews/${product.id}`)
      .then((res)=>{setReviewScores(res.data)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
    }

  }, [product])

  return (
    <div className="border">
      <h6>Ratings & Reviews</h6>
      <div className="flex border">
      <ReviewsSummary reviewScores={reviewScores} />
      <ReviewsList />
      </div>
    </div>
  )
}

export default Reviews;
