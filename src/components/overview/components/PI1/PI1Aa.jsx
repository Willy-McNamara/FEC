import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PI1Aa = ({rating}) => {
  // let rating = reviewMetaData.ratingAverages.ratingAsPercentRounded
  return (
    <div id="PI1Aa" className="ratings">
      <div className="empty-starsW"></div>
      <div className="full-starsW" style={{width: `${rating}%`}}></div>
    </div>
  )
}

export default PI1Aa;