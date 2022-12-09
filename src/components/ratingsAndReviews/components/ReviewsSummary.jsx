import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx'
import FeatureBar from './FeatureBar.jsx'
import RatingsBar from './RatingsBar.jsx'
import axios from 'axios'

const ReviewsSummary = ({ reviewMetaData }) => {
  if (reviewMetaData === 'init') return

  const {countOfRatings, ratingAverages, rawData} = reviewMetaData
  const {ratingOutOf5, ratingAsPercentRounded} = ratingAverages;

  return (
    <div className="flex flex-column containerHalf border">
      <div className="flex flex-row">
        <div><h2>{ratingOutOf5}</h2></div>
        <StarRating data={ratingAsPercentRounded} />
      </div>
      {Object.entries(rawData.ratings).map((rating, index) => {
        return <RatingsBar key={index} rating={rating} countOfRatings={countOfRatings} />
      })
      }
      {Object.entries(rawData.characteristics).map((entry, index) => {
        return <FeatureBar key={index} name={entry[0]} rating={entry[1].value}/>
      })
      }
    </div>
  )
}

export default ReviewsSummary;


//OLD CODE - EVENTUALLY DELETE
 //logs to be deleted
  // console.log('current prop from ReviewsSummary', ratingOutOf5) //evals to {ratingOutOf5: '3.99', ratingAsPercentRounded: '79.75'}

  // console.log('Error Tracking')
  // console.log('Data I need for ReviewScores', metaData)

  //declare state to hold review metadata
  // const [reviewMetaData, setReviewMetaData] = useState('init')


  // // implement a useeffect to call an axios request to fetch it
  // useEffect(() => {
  //   if(reviewMetaData === 'init') {
  //     axios.get(`reviews/meta/37311`)
  //     .then((res)=>{setReviewMetaData(res.data)})
  //     .catch((err)=>{console.log('ERROR ON REVIEWS GET ROUTE', err)})
  //   }

  // }, [reviewMetaData])
  //request is working properly, now need to refactor.
  // console.log('Testing Review MetaData route', reviewMetaData)



  //this needs to make an axios request with use effect, getting back the data that I need to do

  // prototype for ratings controller function -> will be moved
  // const ratingsStackedPercentages = (ratingsObject) => {
  //   // console.log('RATINGS OBJECT', ratingsObject)
  //   let totalNumOfRatings = 0;

  //   for (let key in ratingsObject) {
  //     totalNumOfRatings += +ratingsObject[key]
  //   }

  //   return totalNumOfRatings
  // }

  // for (let char in metaData.characteristics) {
  //   let value = metaData.characteristics[char]
  //   if (char != undefined) {
  //     // console.log('WHY', char, value.value)
  //   }
  // }

  // const countOfRatings = ratingsStackedPercentages(metaData.ratings);

  // const charList = Object.keys(metaData.characteristics);
  // const firstChar = charList[0];

  // console.log('from reviews summary', charList, firstChar)

