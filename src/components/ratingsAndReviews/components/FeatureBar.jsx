import React, { useState, useEffect } from 'react';
import characteristics from './Characteristics.js'

const FeatureBar = ({ name, rating }) => {
  // console.log('testing characteristics import', characteristics)
  // console.log('Props from feature bar', name, rating)
  // console.log('testing access of char object', characteristics[name])
const markerPosition = {
position: 'absolute',
left: `${Math.floor(rating * 20)}%`,
top: '20px',
}

  return (
    <div className='feature-bar'>
      <h5>{name}</h5>
      <span style={markerPosition}>X</span>
      <div className="flex space-between">
        <span>{characteristics[name][0]}</span>
        <span>{characteristics[name][2]}</span>
        <span>{characteristics[name][4]}</span>
      </div>

      <div className='feature-bar-chars flex space-between'>
      </div>
    </div>
  )
}

export default FeatureBar;