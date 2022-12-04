import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PI1C = ({style}) => {

  // conditionally render sale price stuff

  if (style.sale_price) {
    return (
      <div id="PI1C">
        <div id="PI1Csale">
          ${style.original_price}
        </div>
        <div id="PI1Cnormal">
          ${style.sale_price}
        </div>
      </div>
    )

  } else {
    return (
      <div id="PI1C">
        <div id="PI1Cnormal">
          ${style.original_price}
        </div>
      </div>
    )
  }
}

export default PI1C;