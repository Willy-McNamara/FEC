import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx'
import FeatureBar from './FeatureBar.jsx'
import RatingsBar from './RatingsBar.jsx'
import { metaData } from '../DummyData/metaDummyData.js';

const ReviewsSummary = ({ reviewScores }) => {
  console.log('Ratings breakdown', metaData.ratings)
  console.log('char breakdown', metaData.characteristics)

  // prototype for ratings controller function -> will be moved
  const ratingsStackedPercentages = (ratingsObject) => {
    // console.log('RATINGS OBJECT', ratingsObject)
    let totalNumOfRatings = 0;

    for (let key in ratingsObject) {
      totalNumOfRatings += +ratingsObject[key]
    }

    return totalNumOfRatings
  }

  for (let char in metaData.characteristics) {
    let value = metaData.characteristics[char]
    if (char != undefined) {
      console.log('WHY', char, value.value)
    }
  }

  const countOfRatings = ratingsStackedPercentages(metaData.ratings);

  return (
    <div className="flex flex-column containerHalf border">
      <div className="flex flex-row">
        <div><h2>{reviewScores.ratingOutOf5}</h2></div>
        <StarRating data={reviewScores.ratingAsPercentRounded} />
      </div>
      {Object.entries(metaData.ratings).map((rating, index) => {
        return <RatingsBar key={index} rating={rating} countOfRatings={countOfRatings} />
      })
      }
      {/* {Object.entries(metaData.characteristics).map((rating, index) => {
        console.log('RATING FROM INSIDE MAP FUNCTION'rating);
        return <FeatureBar key={index} rating={rating}/>
      })
      } */}
      {  for (let char in metaData.characteristics) {
        let value = metaData.characteristics[char]
      if (char != undefined) {
        return <FeatureBar />
      }
  }}
      {/* <FeatureBar /> */}
    </div>
  )
}

export default ReviewsSummary;