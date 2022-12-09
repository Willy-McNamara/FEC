import React, { useState, useEffect } from 'react';

const ReviewPhoto = ({ photo }) => {
  const {id, url} = photo;
  console.log('Photo tile prop', url)

  return (
    // <div style={{ backgroundImage: `url(${url})` }}/>
    <img src={`${url}`} style={{height: '50px', width: '50px'}}/>
    // <div>
    //   <h3>PHOTO</h3>
    // </div>
  )
}

export default ReviewPhoto;