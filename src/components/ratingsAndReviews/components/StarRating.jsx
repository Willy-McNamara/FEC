import React, { useState, useEffect } from 'react';

const StarRating = ({ratingAsPercentRounded}) => {

  return (
    <div className="ratings">
    <div className="empty-stars"></div>
    <div className="full-stars" style={{width: `${ratingAsPercentRounded}%`}}></div>
  </div>
  )
}

export default StarRating;