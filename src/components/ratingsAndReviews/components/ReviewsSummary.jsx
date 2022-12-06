import React, { useState, useEffect } from 'react';

const ReviewsSummary = ({reviewScores}) => {
  console.log('SCORES AS PROPS', reviewScores);
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className = "flex flex-column containerHalf border">
      <div className = "flex flex-row">
        <div><h2>{reviewScores.ratingOutOf5}</h2></div>
        <div>*****</div>
      </div>
      <div>Review summary by stars</div>
      <div>Review summary by charactistics</div>
    </div>
  )
}

export default ReviewsSummary;