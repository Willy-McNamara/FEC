import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PI1Aa from './PI1Aa.jsx';
import PI1Ab from './PI1Ab.jsx';

const PI1A = ({id}) => {
  // use id as a param in call
  // axios.get(`/averageReviews/${id}`)
  //     .then((res) => {
  //       console.log('res.data from get averageReviews in PI1A.jsx', res.data)
  //     })
  //     .catch((err) => {
  //       console.log('err in get PI1A.jsx', err)
  //       alert('Error getting average of reviews!')
  //     })
  // Make and axios call to get all reviews for this product
  // implement algorithm on server side to average reviews

  const [reviewInfo, setReviewInfo] = useState({stars: null, number: '...'})

  let viewRatingHandler = () => {
    // get element
    let section = document.getElementById('reviewsSection')
    section.scrollIntoView({behavior: "smooth"})
  }

  useEffect(() => {
    axios.get(`reviews/meta/${id}`)
    .then((res)=>{setReviewInfo({stars: res.data.ratingAverages.ratingAsPercentRounded, number: res.data.countOfRatings})})
    .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
    // console.log('I FIRE ONCE'
  }, [id]);

  return (
    <div id="PI1A">
      < PI1Aa rating={reviewInfo.stars} />
      < PI1Ab ratingNum={reviewInfo.number} viewRatingHandler={viewRatingHandler}/>
    </div>
  )

}

// else {
//   return (
//   <div id="PI1A">
//     < PI1Aa rating={reviewMetaData} />
//     < PI1Ab ratingNum={reviewMetaData}/>
//   </div>
//   )
// }

//   if (reviewMetaData === 'init') {
//   return (<></>)
// } else {

export default PI1A;