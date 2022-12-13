import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PI1Ba = ({category}) => {

  return (
    <div id="PI1Ba">
      {category.toUpperCase()}
    </div>
  )
}

export default PI1Ba;