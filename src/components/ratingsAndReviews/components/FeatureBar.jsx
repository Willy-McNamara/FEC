import React, { useState, useEffect } from 'react';

const FeatureBar = ({ name, rating }) => {

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
      </div>
    </div>
  )
}

export default FeatureBar;