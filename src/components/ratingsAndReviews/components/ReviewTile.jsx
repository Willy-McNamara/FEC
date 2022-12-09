import React, { useState, useEffect } from 'react';
import ReviewTileStarRating from './ReviewTileStarRating.jsx'

const ReviewTile = (
  { review:
    {
      review_id,
      rating,
      reviewer_name,
      summary,
      body,
      helpfulness,
      response,
      date,
      photos,
    }
  }) => {

  return (
    <div className="border">
      <div className = 'flex flex-row space-between'>
        <ReviewTileStarRating rating={rating * 20}/>
        <span>{reviewer_name && <span>{reviewer_name}, </span>} {new Date(date).toDateString()}</span>
      </div>
      <h4>{summary}</h4>
      <div>{body}</div>
      {response && <div>{response}</div>}
      {/* TODO: build out the picture component at a basic level */}
      {photos.length > 0 &&<div>{photos.length}</div>}
      {/* TODO: build out the helpful button clicking functionality */}
      <span>Helpful?</span>
      <span>{helpfulness}</span>
      {/* TODO: build */}
      <span>Report button</span>
    </div>
  )
}

export default ReviewTile;