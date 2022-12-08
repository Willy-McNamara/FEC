import React from 'react';
const StarRating = ({review}) => {

  return (
    <div className="ratings">
    <div className="empty-stars"></div>
    <div className="full-stars" style={{width: `${review.ratingAsPercentRounded}%`}}></div>
  </div>
  )
}

export default StarRating;