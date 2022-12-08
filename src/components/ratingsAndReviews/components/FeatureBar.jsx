import React, { useState, useEffect } from 'react';

const FeatureBar = ({ rating }) => {
  console.log('RATING FROM FEATUREBAR', rating)
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])
  return (
    <div className='feature-bar'>
      <span></span>
      <span style={{marginleft: `50%`}}>X</span>
      <div className='feature-bar-chars flex space-between'>
        <span>bad</span>
        <span>mediocre</span>
        <span>good</span>
      </div>
    </div>
  )
}

export default FeatureBar;