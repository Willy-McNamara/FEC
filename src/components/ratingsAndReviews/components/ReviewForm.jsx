import React, { useState, useEffect } from 'react';

const ReviewForm = ({ name, id }) => {
  //need product name from reviews list
  const [,] = useState();

  useEffect(() => {

  }, [])

  return (
    <div>
      <h4>Write your review about {name}</h4>
      <form>
        <input type="text" placeholder="Nickname"/>
        <input type="email" placeholder="Enter your email"/>

        <fieldset className='flex flex-row'>
          <legend>Select a rating between 1 and 5</legend>
          {/* For and ID need to match */}
          {/* Value generally goign to match inside label tag */}
          <div>
            <input type="radio" id="rate_1" name="rating" value="1"/>
              <label for="rate_1">1</label>
          </div>

          <div>
            <input type="radio" id="rate_2" name="rating" value="2"/>
              <label for="rate_2">2</label>
          </div>
          <div>
            <input type="radio" id="rate_3" name="rating" value="3"/>
              <label for="rate_3">3</label>
          </div>
          <div>
            <input type="radio" id="rate_4" name="rating" value="4"/>
              <label for="rate_4">4</label>
          </div>
          <div>
            <input type="radio" id="rate_5" name="rating" value="5"/>
              <label for="rate_1">5</label>
          </div>
        </fieldset>



        <input type="submit" value="submit"/>
      </form>
      {/*
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
        */}

    </div>
  )
}

export default ReviewForm;