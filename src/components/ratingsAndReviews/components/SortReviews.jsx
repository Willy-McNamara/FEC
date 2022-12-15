import React, { useState, useEffect } from 'react';

const SortReviews = ({numReviews, sortReviews}) => {

  // const [,] = useState();

  // useEffect(() => {

  // }, [])


  // add back to select onChange={sortReviews}
  return (
    <div>
      <span>{numReviews} reviews, sorted by</span>
      <select name="SortReviews" id="SortReviews" onChange={sortReviews}>
          <option value="Relevent" selected>Relevant</option>
          <option value="Helpful">Helpful</option>
          <option value="Newest">Newest</option>
      </select>
    </div>
  )
}

export default SortReviews;