import React, { useState, useEffect } from 'react';
import ReviewTileStarRating from './ReviewTileStarRating.jsx'

const ReviewTile = (singleReview) => {
  console.log('review tile rating', singleReview.review.rating)
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <div className = 'flex flex-row space-between'>
        <ReviewTileStarRating rating={singleReview.review.rating * 20}/>
        <div>review date</div>
      </div>
      <h4>Review Title</h4>
      <div>Review Body</div>
      <div>review response section: conditional rendering</div>
      <>Helpful?</>
      <>Yes counter</>
      <>Report button</>
    </div>
  )
}

export default ReviewTile;
//data shape for reference
// {
//   "review_id": 1277407,
//   "rating": 2,
//   "summary": "Great outfit",
//   "recommend": true,
//   "response": null,
//   "body": "Very comfortable!",
//   "date": "2022-10-28T00:00:00.000Z",
//   "reviewer_name": "Brian123",
//   "helpfulness": 1,
//   "photos": [
//       {
//           "id": 2456642,
//           "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1666985076/zcfhcxavufcg3hijsqsc.jpg"
//       }
//   ]
// },
