import React, { useState, useEffect } from 'react';
import ReviewTileStarRating from './ReviewTileStarRating.jsx'
import PhotoModal from './PhotoModal.jsx'
import axios from 'axios'

const ReviewTile = ({ review, score }) => {
  const { review_id, rating, reviewer_name, summary, body, helpfulness, response, date, photos, recommend } = review

  console.log('REVIEW FROM REVIEWTILE', review)

  const [showModal, setShowModal] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [isHelpful, setHelpful] = useState(null)


  const manageModal = () => {
    setShowModal(!showModal)
  }
  //TODO: export to helper function
  const countChars = (str, max) => {
    let result = str
    if (str.length >= max) {
      result = result.slice(0, max)
    }
    if (str.length > max) {
      result += '...'
    }
    return result
  }

  const buttonText = () => {
    return isExpanded ? 'Show less' : 'Show more'
  }

  const handleBodyToggle = (e) => {
    e.preventDefault()
    setExpanded(!isExpanded)
  }

  const handleHelpful = (e) => {
    if (isHelpful !== null) {
      console.log('testing early exit')
      return
    }
    const helpful = e.target.getAttribute('value')


    axios.put(`reviews/helpful`, {
      isHelpful: helpful,
      review_id: review_id,
    })
    .then((res)=>{setHelpful(helpful)})
    .catch((err)=>{console.log('error reporting')})
  }

  // console.log('raw review from review tile', review)
  // console.log('score from reviewtile', helpfulness)

  return (
    <div className="border">
      <div className='flex flex-row space-between'>
        <ReviewTileStarRating rating={rating * 20} />
        <span>{reviewer_name && <span>{reviewer_name}, </span>} {new Date(date).toDateString()}</span>
      </div>
      <h4>{countChars(summary, 60)}</h4>
      <div>{!isExpanded ? countChars(body, 250) : body}</div>
      {review.body.length > 250 && (
        <a href="#" onClick={handleBodyToggle}>
          {buttonText()}
        </a>
      )}


      <div>
        {photos.length > 0 &&
          <div className="border">{photos.map((photo, index) => {
            //FIXME: will need to refactor
            if (index > 3) return;
            return (
              <div>
                <img onClick={manageModal} src={`${photo.url}`} style={{ height: '50px', width: '50px' }} />
                <PhotoModal showModal={showModal} setShowModal={setShowModal}>
                  <img src={`${photo.url}`} style={{ height: '500px', width: '500px' }} />
                </PhotoModal>
              </div>
            )
          })}</div>}
      </div>
      {review.recommend && <div>I recommend this product</div>}
      {response && <div style={{ backgroundColor: '#DAF7A6' }}>{response}</div>}
      {/* TODO: build out the helpful button clicking functionality */}
      <a href='#' value={true} onClick={handleHelpful}>Helpful?  </a>
      <span>{helpfulness}</span>
      {/* TODO: build */}
      <a href="#" value={false} onClick={handleHelpful}>Report button</a>
    </div>
  )
}

export default ReviewTile;