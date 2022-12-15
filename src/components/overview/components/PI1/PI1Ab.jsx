import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PI1Ab = ({ratingNum, viewRatingHandler}) => {
  // console.log('reviewMetaData in PI1Ab ,', reviewMetaData)
  // let ratingNum = reviewMetaData.countOfRatings

  return (
    <a id="PI1Ab" href="#fake" onClick={viewRatingHandler}>
      {`Read all ${ratingNum} reviews`}
    </a>
  )
}

export default PI1Ab;