import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortReviews from './SortReviews.jsx'
import axios from 'axios';

const ReviewsList = ({ product }) => {

  const [reviewsList , setReviewList ] = useState([]);


  useEffect(() => {
      axios.get(`/reviews/${product.id}`)
      .then((res)=>{setReviewList(res.data.results)})
      .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
  }, [])

  return (
    <div className = "flex flex-column containerHalf border">
      <SortReviews numReviews={reviewsList.length} />
      <div>
        {reviewsList.map((review, index)=>{
          return <ReviewTile key={index} review={review}/>
        })}
      </div>
      <div>
        {/* TODO: map out functionality for More Reviews button */}
        <button>More Reviews</button>
        {/* TODO: map out functionality for add review button */}
        <button>Add Review +</button>
      </div>
    </div>
  )
}

export default ReviewsList;