import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container1B = ({product}) => {

  return (
    <div id="Container1B">
      <h4>{product.slogan}</h4>
      <h6>{product.description}</h6>
    </div>
  )
}

export default Container1B;