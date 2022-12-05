import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';

const ReviewsList = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className = "flex flex-column containerHalf border">
      <h4>VAR reviews sorted by VAR</h4>
      <div>
        <ReviewTile />
        <ReviewTile />
        <ReviewTile />
      </div>
      <div>
        <button>More Reviews</button>
        <button>Add Review +</button>
      </div>
    </div>
  )
}

export default ReviewsList;