import React, { useState, useEffect } from 'react';

const StarRating = ({ data }) => {
  // console.log('FROM STAR RATING', data)

  return (
    <div className="ratings">
    <div className="empty-stars"></div>
    <div className="full-stars" style={{width: `${data}%`}}></div>
  </div>
  )
}

export default StarRating;