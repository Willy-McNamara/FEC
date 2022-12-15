import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OverviewFeatures = ({id}) => {

  console.log('id in OVerviewFeatures', id)

  // map out features onto this list
  let [list, setList] = useState('init')

  // axios request which maps out the <li>'s

  // format -- {feature: 'Cut', value: 'Loose'}

  useEffect(() => {

    axios.get(`/products/${id}`)
    .then((data) => {
      console.log('logging data.data in OverviewFeatures getRequest', data.data.features)
      Promise.all(data.data.features.map((featureObj) => {
        // return an <li> with the featureObj.value as the text of the li
        return (
        <div id="featureList">
          <img id="featureCheck" src="checkMark.png"></img>
          <div id="listedFeature">{featureObj.value}</div>
        </div>)
      }))
      .then((featureElements) => {
        setList(featureElements)
      })
    })
    .catch((err) => {
      console.log('error fetching product details!', err)
    })
  }, [id])

  console.log('logging list in OverviewFeatures', list)


  // if (list[0]) {
  //   return (<></>)
  // }
  return (
    <div id="OverviewFeatures">
      {list}
    </div>
  )
}

export default OverviewFeatures;