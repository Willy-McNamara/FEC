import React, { useState, useEffect } from 'react';

const SortReviews = ({numReviews}) => {

  // const [,] = useState();

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <span>{numReviews} reviews, sorted by</span>
      <select name="SortReviews" id="SortReviews">
          <option value="Relevent" selected>Relevant</option>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
      </select>
    </div>
  )
}

export default SortReviews;