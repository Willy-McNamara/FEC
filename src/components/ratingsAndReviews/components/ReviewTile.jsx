import React, { useState, useEffect } from 'react';
import ReviewTileStarRating from './ReviewTileStarRating.jsx'

const ReviewTile = (Review) => {
  //currently hardcoded
  const [response, setResponse ] = useState(response);

  // useEffect(() => {

  // }, [])

  return (
    <div className="border">
      <div className = 'flex flex-row space-between'>
        <ReviewTileStarRating rating={Review.review.rating * 20}/>
        <div>{Review.review.reviewer_name}, {new Date(Review.review.date).toDateString()}</div>
      </div>
      <h4>{Review.review.summary}</h4>
      <div>{Review.review.body}</div>
      {response && <div>{response}</div>}
      <span>Helpful?</span>
      <span>{Review.review.helpfulness}</span>
      <span>Report button</span>
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
