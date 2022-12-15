import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Container1B = ({product}) => {

  return (
    <div id="Container1B">
      <div id="C1Bleft">
        <div id="productSlogan">
          {product.slogan}
        </div>
        <div id="productDescription">
          {product.description}
        </div>
      </div>
    </div>
  )
}

export default Container1B;