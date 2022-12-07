import React, { useState, useEffect } from 'react';

const RatingsBar = ({ rating, countOfRatings }) => {
  console.log('RATING FROM RATINGS BAR', rating, countOfRatings)
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div class='flex'>
      <div>{rating[0]} Stars</div>
      <div class="wrapper">
        <div class="progress-bar">
          <span class="progress-bar-fill" style={{width: `${(rating[1]/countOfRatings)*100}%`}}></span>
        </div>
      </div>
    </div>
  )
}

export default RatingsBar;