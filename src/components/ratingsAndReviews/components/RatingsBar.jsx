import React, { useState, useEffect } from 'react';

const RatingsBar = ({ rating, countOfRatings, filterReviews, setFilterReviews }) => {
  // console.log('testing filter props in ratings bar', filterReviews, setFilterReviews)
  // const [filterArr , setFilterArr] = useState([]);

  // let filterArr = [];

  const filterRevButton = (e) => {
    e.preventDefault()
    const filterBy = e.target.getAttribute('value')
    // console.log('testing includes on filter reviews', filterReviews.includes(filterBy))

    if (!(filterReviews.includes(filterBy))) {
      setFilterReviews(filterReviews.concat(filterBy))
    } else if (filterReviews.length === 1) {
      if(filterReviews.includes(filterBy)) {
        setFilterReviews([])
      }
    } else {
      const copy = filterReviews.slice(0)
      // console.log('copy from inside filter', copy)
      copy.splice(copy.indexOf(filterBy),1)
      // console.log('spliced copy', copy)
      setFilterReviews(copy)
    }

    // setFilterReviews(filterReviews.concat(filterBy))
    //create a structure to hold the current values to use when sorting
    //this structure needs to be able to
      //add values if they are not present
      //eleminate values if they are present
      //be easy to test for being empty
      //probably use an object to control this functionality

      //loop over the current reviews list
      //check if the correct field is included in the filter object
      //what is the correct field....
      //render any review that conforms

      //have a seperate case to account for an empty object
        //call the standard sort reviews function..
        //function would need to be adjusted for default case/case of no event
  }
  // console.log('SHOULD INCREMENT', filterReviews)



  return (
    <div class='flex'>
      <div onClick={filterRevButton} value={`${rating[0]}`}>{rating[0]} Stars</div>
      <div class="wrapper">
        <div class="progress-bar">
          <span class="progress-bar-fill" style={{width: `${(rating[1]/countOfRatings)*100}%`}}></span>
        </div>
      </div>
    </div>
  )
}

export default RatingsBar;