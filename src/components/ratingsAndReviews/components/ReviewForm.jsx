import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const ReviewForm = ({ name, id, ch_data }) => {
  const [summaryWordCount, setSummaryWordCount] = useState(0)
  const buttonValues = [1, 2, 3, 4, 5];

  const charCount = (e) => {
    // console.log(e.target.value?.length)
    setSummaryWordCount(e.target.value?.length);
  }

  const handleClick = (e) => {
    // form data creates a form data object**
    e.preventDefault()

    // const featuresList = document.querySelectorAll('.feature-label');
    // featuresList.forEach((item) => {
    //   console.log(item.dataset.id)
    // });
    const form = new FormData(e.target)
    const formObject = Object.fromEntries(form.entries())
    console.log(formObject.email.slice())
    console.log('FORM OBJECT', formObject)
    formObject.characteristics = {};
    formObject.product_id = id;
    formObject.photos = [];
    for (let prop in formObject) {
      if (Number.parseInt(prop)) {
        formObject.characteristics[prop] = formObject[prop];
        delete formObject[prop];
      }
    }
    // Characteristics {'123': 1}
    console.log('FORM OBJECT', formObject);
    Axios.post('/reviews/newReview', formObject)
      .then((data) => {
        console.log('Response received from server: ', data);
      })
      .catch(console.error);
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
    <div id="reviews-form">
      <h4>Write your review about {name}</h4>

      <form action="#" onSubmit={handleClick}>
        <label>Name:</label>
        <input type="text" id="name" name="name" placeholder="Example: jackson11!" required />
        <p class="subtitle">For privacy reasons, do not use your full name or email address”</p>
        <label>Email:</label>
        <input type="email" id="email" name="email" placeholder="Example: jackson11@email.com" pattern="^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$"required />
        <p class="subtitle">For authentication reasons, you will not be emailed”</p>
        <fieldset>
          <legend>Recommended:</legend>
          <div>
            <input type="radio" id="yes" name="recommend" value={true} required />
            <label for="yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="no" name="recommend" value={false} />
            <label for="no">No</label>
          </div>
        </fieldset>


        <fieldset>
          <legend>Select a rating between 1 and 5</legend>
          {/* For and ID need to match */}
          {/* Value generally going to match inside label tag */}
          {buttonValues.map((value, index) => {
            return (
              <div>
                <input type="radio" id={`rate_${value}`} name="rating" value={value} required />
                <label for={`rate_${value}`}>{`${value}`}</label>
              </div>
            )

          })
          }
        </fieldset>

        {!!ch_data &&
          <div>

            {Object.entries(ch_data).map((feature, index) => {
              const attributes = charDescriptors[feature[0]];
              return (
                <div className="feature-label" data-id={feature[1].id}>

                  <fieldset>
                    <legend>{feature[0]}</legend>

                    {
                      buttonValues.map((value, index) => {
                        return (
                          <div>
                            <input type="radio" id={`rate_${value}`} name={`${feature[1].id}`} value={value} required />
                            <label for={`rate_${value}`}>{`${value}`}</label>
                            {(index === 0 || index === 4) &&
                              <p>{attributes[index]}</p>
                            }
                          </div>
                        )

                      })
                    }

                  </fieldset>
                </div>);
            })}
          </div>
        }
        <label>Summary:</label>
        <input type="text" id="summary" name="summary" placeholder="Example: Best purchase ever!" maxlength="60" />
        <div>
          <label>Review:</label>
          <textarea rows="3" cols="50" onChange={charCount} id="review_body" name="body" placeholder="Why did you like the product or not?" minlength="50 " maxlength="1000" required></textarea>
          <p>{
            50 > summaryWordCount ?
              `Minimum required characters left: ${50 - summaryWordCount}` :
              `Minimum Reached`
          }
          </p>
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default ReviewForm;