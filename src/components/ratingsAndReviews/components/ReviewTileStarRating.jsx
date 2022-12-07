import React, { useState, useEffect } from 'react';

const ReviewTileStarRating = (rating) => {
  // console.log('RATING', rating)

  return (
    <div className="ratings">
    <div className="empty-stars"></div>
    <div className="full-stars" style={{width: `${rating}%`}}></div>
  </div>
  )
}

export default ReviewTileStarRating;