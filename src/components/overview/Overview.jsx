import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container1A from './components/Container1A.jsx';
import Container1B from './components/Container1B.jsx';

const Overview = ({product}) => {
  // CONTAINER 1
  let [styles, setStyles] = useState('init')
// console.log('PRODUCT FROM OVERVIEW', product.id)
  useEffect(() => {
    // console.log('useEffect triggered in Overview.jsx')
    axios.get(`http://localhost:3001/productStyles/${product.id}`)
    .then((res) => {
      //console.log('res.data from get styles in Overview.jsx', res.data)
      setStyles(res.data.results)
    })
    .catch((err) => {
      console.log('err in get Overview.jsx', err)
      alert('Error getting styles!')
    })
  }, [product])
  // taking out styles may cause infinit loop

  if (styles === 'init') {
    return (
      <h6>Fetching styles...</h6>
    )
  } else {
  return (
      <div id="Overview">
        <Container1A product={product} styles={styles}/>
        <Container1B product={product}/>
      </div>
    )
  }
}

export default Overview;

