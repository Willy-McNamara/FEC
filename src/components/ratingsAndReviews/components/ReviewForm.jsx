import React, { useState, useEffect } from 'react';

const ReviewForm = ({ name, id, ch_data }) => {
  //need product name from reviews list
  console.log('features from review form', ch_data);
  const buttonValues = [1, 2, 3, 4, 5];

  //TODO:fix validation required field?
  //TODO:handle actual data submission
  //TODO:add photo-submission area + add that to validation

  const handleClick = (e) => {
    // form data creates a form data object**
    e.preventDefault()
    const form = new FormData(e.target.form)
    const formObject = Object.fromEntries(form.entries())

    console.log('FORM OBJECT', formObject.rate_Width)

  //FIXME: why am I having trouble validating with the loop structure? Why are only name and email appearing in the formObject?
    // for (let key in formObject) {
    //   console.log(formObject[key])
    //   if (!formObject[key]?.length > 9 || !formObject[key]) {
    //     alert('your review is incomplete, pleaes submit again')
    //     return
    //   }
    // }

    // if (!formObject?.name?.length > 0) {
    //   alert('Please Enter your name')
    //   return;
    // }

    // if (!formObject?.email?.length > 0) {
    //   alert('Please Enter an email')
    //   return;
    // }

    // if (!formObject.rating) {
    //   alert('Please enter a rating')
    //   return
    // }

    // if (!formObject.rate_Fit) {
    //   alert('Please Rate the Product Fit')
    //   return
    // }

    // if (!formObject.rate_Length) {
    //   alert('Please Rate the Product Length')
    //   return
    // }

    // if (!formObject.rate_Quality) {
    //   alert('Please Rate the Product Quality')
    //   return
    // }

    // if (!formObject.rate_Comfort) {
    //   alert('Please Rate the Product Comfort')
    //   return
    // }

    // if (!formObject.rate_Width) {
    //   alert('Please Rate the Product Width')
    //   return
    // }

    // alert('form validated')

  }
  const charDescriptors = {
    Size: [
      'A size too Small',
      'A half size too small',
      'perfect',
      'A Half size too big',
      'A size too big'
    ],
    Width: [
      'Too narrow',
      'Slightly narrow',
      'Perfect',
      'Slightly wide',
      'Too wide'
    ],
    Comfort: [
      'Uncomfortable',
      'Slightly uncomfortable',
      'Ok',
      'Comfortable',
      'Perfect',

    ],
    Quality: [
      'Poor',
      'Below average',
      'What I expected',
      'Pretty great',
      'Perfect',
    ],
    Length: [
      'Runs Short',
      'Runs slightly short',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ],
    Fit: [
      'Runs tight',
      'Runs slightly tight',
      'Perfect',
      'Runs slightly long',
      'Runs long',
    ]
  }


  return (
    <div>
      <h4>Write your review about {name}</h4>
      <form>

        <input type="text" id="name" name="name" placeholder="Nickname"/>
        <input type="email" id="email" name="email" placeholder="Enter your email"/>
        <input type="submit" value="submit" onClick={handleClick} />
        <fieldset className='flex flex-row space-between'>
          <legend>Select a rating between 1 and 5</legend>
          {/* For and ID need to match */}
          {/* Value generally going to match inside label tag */}
          {buttonValues.map((value, index)=>{
            return (
              <div>
              <input type="radio" id={`rate_${value}`} name="rating" value={`${value}`}/>
              <label for={`rate_${value}`}>{`${value}`}</label>
            </div>
            )

          })
          }
          {/* <div>
            <input type="radio" id="rate_1" name="rating" value="1" />
            <label for="rate_1">1</label>
          </div>

          <div>
            <input type="radio" id="rate_2" name="rating" value="2" />
            <label for="rate_2">2</label>
          </div>

          <div>
            <input type="radio" id="rate_3" name="rating" value="3" />
            <label for="rate_3">3</label>
          </div>

          <div>
            <input type="radio" id="rate_4" name="rating" value="4" />
            <label for="rate_4">4</label>
          </div>

          <div>
            <input type="radio" id="rate_5" name="rating" value="5" />
            <label for="rate_1">5</label>
          </div> */}
        </fieldset>

        {/*
        so what needs to happen here
        need to iterate over the ch data array like below
        for each data array, a list of 5 radio buttons needs to be entered
        each list must consistt of
        - The main characteristic
        - 5 radio buttons, each with dynamic options based on the characteristic

        */}

        {!!ch_data &&
          <div>

            {Object.entries(ch_data).map((feature, index) => {
              const attributes = charDescriptors[feature[0]];
              // const buttonValues = [1, 2, 3, 4, 5]
              console.log('TESTING CHAR OBJECT', attributes);
              return (
                <div>
                  {/* {`` + feature[0] + JSON.stringify(feature[1])} */}

                  <fieldset className='flex flex-row space-between'>
                    <legend>{feature[0]}</legend>
                    {/* For and ID need to match */}
                    {/* Value generally going to match inside label tag */}

                    {
                      buttonValues.map((value, index) => {
                        return (
                          <div>
                            <input type="radio" id={`rate_${value}`} name={`rate_${feature[0]}`} value={`${value}`}/>
                            <label for={`rate_${value}`}>{`${value}`}</label>
                            <p>{value === 1 ? attributes[0] : undefined}</p>
                            <p>{value === 5 ? attributes[4] : undefined}</p>
                          </div>
                        )

                      })


                    }
                    {/* <div>
                      <input type="radio" id="rate_1" name={`rate_${feature[0]}`} value="1" />
                      <label for="rate_1">{`1 - ${attributes[0]}`}</label>
                    </div>

                    <div>
                      <input type="radio" id="rate_2" name="rating" value="2" />
                      <label for="rate_2">2</label>
                    </div>

                    <div>
                      <input type="radio" id="rate_3" name="rating" value="3" />
                      <label for="rate_3">3</label>
                    </div>

                    <div>
                      <input type="radio" id="rate_4" name="rating" value="4" />
                      <label for="rate_4">4</label>
                    </div>

                    <div>
                      <input type="radio" id="rate_5" name="rating" value="5" />
                      <label for="rate_1">{`5 - ${attributes[4]}`}</label>
                    </div> */}
                  </fieldset>


                </div>)
            })}
          </div>
        }





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