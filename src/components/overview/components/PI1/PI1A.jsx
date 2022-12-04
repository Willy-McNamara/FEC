import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1Aa from './PI1Aa.jsx';
import PI1Ab from './PI1Ab.jsx';

const PI1A = ({id}) => {
  // use id as a param in call
  // axios.get(`http://localhost:3001/averageReviews/${id}`)
  //     .then((res) => {
  //       console.log('res.data from get averageReviews in PI1A.jsx', res.data)
  //     })
  //     .catch((err) => {
  //       console.log('err in get PI1A.jsx', err)
  //       alert('Error getting average of reviews!')
  //     })
  // Make and axios call to get all reviews for this product
  // implement algorithm on server side to average reviews

  return (
    <div id="PI1A">
      < PI1Aa />
      < PI1Ab />
    </div>
  )
}

export default PI1A;