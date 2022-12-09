import React, { useState, useEffect } from 'react';

const FeatureBar = ({ name, rating }) => {
  // console.log('RATING FROM FEATUREBAR', name, rating)
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])
const markerPosition = {
position: 'absolute',
left: `${Math.floor(rating * 20)}%`,
top: '20px',
}

  return (
    <div className='feature-bar'>
      <h5>{name}</h5>
      <span style={markerPosition}>X</span>
      <div className='feature-bar-chars flex space-between'>
        {/* <span>bad</span>
        <span>mediocre</span>
        <span>good</span> */}
      </div>
    </div>
  )
}

export default FeatureBar;