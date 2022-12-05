import React, { useState, useEffect } from 'react';

const ReviewsSummary = () => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div className = "flex flex-column containerHalf border">
      <div className = "flex flex-row">
        <div>3.5</div>
        <div>*****</div>
      </div>
      <div>Review summary by stars</div>
      <div>Review summary by charactistics</div>
    </div>
  )
}

export default ReviewsSummary;