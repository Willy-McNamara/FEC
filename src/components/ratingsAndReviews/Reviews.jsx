import React, { useState, useEffect } from 'react';
import ReviewsSummary from './components/ReviewsSummary.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import axios from 'axios';

//capitalized file name

const Reviews = ({product}) => {
//OLD CODE
  const [reviewScores , setReviewScores ] = useState('init');


  useEffect(() => {
    if (reviewScores === 'init') {
      axios.get(`/averageReviews/${product.id}`)
      .then((res)=>{setReviewScores(res.data)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
    }

  }, [product])
  // console.log('OLD review scores from Reviews.jsx', reviewScores);

//KEEP
  // implement a useeffect to call an axios request to fetch it
  const [reviewMetaData, setReviewMetaData] = useState('init')

  useEffect(() => {
    if(reviewMetaData === 'init') {
      axios.get(`reviews/meta/${product.id}`)
      .then((res)=>{setReviewMetaData(res.data)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
    }

  }, [reviewMetaData]);

  console.log('reviewMetaData from reviews.jsx', reviewMetaData.countOfRatings);
  //request is working properly, now need to refactor.


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
