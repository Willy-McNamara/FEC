import React, { useState, useEffect } from 'react';

//#1 - this needs to take the result of the "alcRatingAverages" found in server/index.js as a prop. The function should be called by whatever component
//ends up being the parent of this component, or you can have this componenet itself make the call

//#2 - set this to be equal to the 'ratingsAsPercentRounded' key from the 'calcRatingAverages' Function above.


const StarRating = ({/*#1 */}) => {

  return (
    <div className="ratings">
    <div className="empty-stars"></div>
    <div className="full-stars" style={{width: `${/* #2 */}%`}}></div>
  </div>
  )
}

export default StarRating;