import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx'
import FeatureBar from './FeatureBar.jsx'
import RatingsBar from './RatingsBar.jsx'
import { metaData } from '../DummyData/metaDummyData.js';

const ReviewsSummary = ({ reviewScores }) => {
  // console.log('Ratings breakdown', metaData.ratings)
  // console.log('char breakdown', metaData.characteristics)

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
      // console.log('WHY', char, value.value)
    }
  }

  const countOfRatings = ratingsStackedPercentages(metaData.ratings);

  const charList = Object.keys(metaData.characteristics);
  const firstChar = charList[0];

  // console.log('from reviews summary', charList, firstChar)


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
      {Object.entries(metaData.characteristics).map((entry, index) => {
        // console.log('RATING FROM INSIDE MAP FUNCTION',entry[1].value);
        return <FeatureBar key={index} name={entry[0]} rating={entry[1].value}/>
      })
      }
      {/* {for (let char in metaData.characteristics) {
        let value = metaData.characteristics[char]
      if (char != undefined) {
        return <FeatureBar />
      }
  }} */}
      {/* <FeatureBar name={firstChar} rating={metaData.characteristics[firstChar].value}/> */}
    </div>
  )
}

export default ReviewsSummary;