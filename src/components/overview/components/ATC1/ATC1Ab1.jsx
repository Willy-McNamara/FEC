import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ATC1Ab1= ({qty, quantViewHandler}) => {

  return (
    <div id="ATC1Ab1" onClick={(e) => {
      e.preventDefault();
      quantViewHandler()
    }}>
      {qty}
    </div>
  )
}

export default ATC1Ab1