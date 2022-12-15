import React, { useState, useEffect } from 'react';

const ReviewPhoto = ({ photo }) => {
  const {id, url} = photo;

  return (
    //TODO: build modal functionalality per photo.
    <img src={`${url}`} style={{height: '50px', width: '50px'}}/>
  )
}

export default ReviewPhoto;