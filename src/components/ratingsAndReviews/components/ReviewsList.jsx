import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import reviewData from '../DummyData/reviewDummyData.js';

const ReviewsList = () => {
  // console.log('Review Data', reviewData.reviewData.results[1]);
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className = "flex flex-column containerHalf border">
      <h4>VAR reviews sorted by VAR</h4>
      <div>
        <ReviewTile review={reviewData.reviewData.results[1]}/>
      </div>
      <div>
        <button>More Reviews</button>
        <button>Add Review +</button>
      </div>
    </div>
  )
}

export default ReviewsList;