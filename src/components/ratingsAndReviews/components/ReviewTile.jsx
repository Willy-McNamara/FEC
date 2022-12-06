import React, { useState, useEffect } from 'react';

const ReviewTile = (singleReview) => {
  // console.log('REVIEW TILE', singleReview.review)
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <div className = 'flex flex-row space-between'>
        <div>****</div>
        <div>review date</div>
      </div>
      <h4>Review Title</h4>
      <div>Review Body</div>
      <div>review response section: conditional rendering</div>
      <>Helpful?</>
      <>Yes counter</>
      <>Report button</>
    </div>
  )
}

export default ReviewTile;