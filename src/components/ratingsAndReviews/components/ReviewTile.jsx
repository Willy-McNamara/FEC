import React, { useState, useEffect } from 'react';
import ReviewTileStarRating from './ReviewTileStarRating.jsx'
import PhotoModal from './PhotoModal.jsx'

const ReviewTile = ({ review, score }) => {
  const { review_id, rating, reviewer_name, summary, body, helpfulness, response, date, photos } = review
  //FIXME: why did this cause an infinite re-render cycle??
  const [showModal, setShowModal] = useState(false);



  console.log('raw review from review tile', review)
  console.log('score from reviewtile', helpfulness)

  return (
    <div className="border">
      <div className='flex flex-row space-between'>
        <ReviewTileStarRating rating={rating * 20} />
        <span>{reviewer_name && <span>{reviewer_name}, </span>} {new Date(date).toDateString()}</span>
      </div>
      <h4>{summary}</h4>
      <div>{body}</div>
      {response && <div>{response}</div>}
      {photos.length > 0 ?
        <div className="border">{photos.map((photo, index) => {
          //FIXME: will need to refactor
          if (index > 3) return;
          return (
            <div>
              <img onClick={()=>{setShowModal(true)}} src={`${photo.url}`} style={{ height: '50px', width: '50px' }} />
              <PhotoModal showModal={showModal} setShowModal={setShowModal}>
              <img src={`${photo.url}`} style={{ height: '500px', width: '500px' }} />
              </PhotoModal>
            </div>
          )
        })}</div> : undefined}
      {/* TODO: build out the helpful button clicking functionality */}
      <span>Helpful?</span>
      <span>{helpfulness}</span>
      {/* TODO: build */}
      <span>Report button</span>
    </div>
  )
}

export default ReviewTile;