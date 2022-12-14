import React, { useState, useEffect } from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortReviews from './SortReviews.jsx'
import Modal from './Modal.jsx'
import ReviewForm from './ReviewForm.jsx'
import MoreReviews from './ReviewScrollModal.jsx'
import ReviewScrollList from './ReviewScrollList.jsx'
import axios from 'axios'




const ReviewsList = ({ product, metaData }) => {
  if (metaData === 'init') return
  const [reviewsList, setReviewList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMoreReviews, setshowMoreReviews] = useState(false);

  const viewMoreReviews = () => {setshowMoreReviews(!showMoreReviews)}
  const viewAddReview = () =>{setShowModal(!showModal)}


  // console.log('props from reviewslist', metaData.rawData.characteristics)

  useEffect(() => {
    axios.get(`/reviews/${product.id}`)
      .then((res) => { setReviewList(res.data.results) })
      .catch((err) => { console.log('ERROR ON REVIEWS GET ROUTE', err) })
  }, [])

  return (
    <div className="flex flex-column containerHalf border">
      {/* //TODO:Update this to be as long as ALL reviews */}
      <SortReviews numReviews={reviewsList.length} />
      <div>
        {reviewsList.slice(0, 2).map((review, index) => {
          return <ReviewTile key={index} review={review} score={metaData.rawData.recommended} />
        })}
      </div>
      <div>
        {/* TODO: map out functionality for More Reviews button */}
        {/* <button onClick={viewMoreReviews}>More Reviews</button>
        <MoreReviews showMoreReviews={showMoreReviews} setshowMoreReviews={setshowMoreReviews}>
          <ReviewScrollList productId = {product.id}/>
        </MoreReviews> */}
        <button onClick={() => {setshowMoreReviews(true)}}>More Reviews</button>

        <Modal showModal={showMoreReviews} setShowModal={setshowMoreReviews} >
          <div>
            {reviewsList.map((review, index) => {
              return <ReviewTile key={index} review={review} score={metaData.rawData.recommended} />
            })}
          </div>
        </Modal>

        <button onClick={viewAddReview}>Add Review +</button>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ReviewForm name={product.name} id={product.id} ch_data={metaData.rawData.characteristics} viewAddReview={viewAddReview}/>
        </Modal>
        {/*
        click the add review button
        modal opens and contains a form
        user fills out the form
        - contains header stating "wrting your review about PRODUCT NAME"
        - contains fields and options
        -- overall rating 1 to 5 (poor to great)**
        -- recommend yes/no**
        -- designated charactertistics, set of up to 5 sets of 5 radio buttons each representating 1 to 5 rating of a specific char
        -- review summary (text input of up to 60 chars)
        -- review body text input allowing up to 1000 chars**
        ----needs to keep a live count up until 50 characters are reached (50 min for submission, 1000 max)
        --option to upload photos
        --user nickname**
        --user email**
        --submit button (triggers validation)

        user clicks submit
        -check if all mandatory fields are filled out, if not block submission and prompt user to correct
        -check any other clientside validation rules if not already accounted for in form
        -send captured data to server via ajax POST
        -server sends ajax POST to API
        -data behind the API is updated with new review submission
        -modal closes
        -new reviews list is sent back to the client
        -reviws list on client side is updated with new reviews list that was sent back
        -client rerenders



        */}
      </div>
    </div>
  )
}

export default ReviewsList;