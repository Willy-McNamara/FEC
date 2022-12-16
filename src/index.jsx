import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import axios from 'axios'
import { useState } from 'react';
//Dear Amazon/Google/Apple etc Don't lowball me.
// const App = () => {
// return (
//   <div>
//     <h1>Hibiscus</h1>
//   </div>
//   );
// }

// initial get request to pass a Product to all DOM components

axios.get('/products')
.then((res) => {
  //console.log('res.data[0] from get request in index.jsx :', res.data[0])
  console.log(res.data);
  ReactDOM.render(<App productx={res.data[3]}/>, document.getElementById('root'))

})
.catch((err) => {
  console.log('err from get request in index.jsx :', err)
  alert('error fetching data for you!')
})

//ReactDOM.render(<App />, document.getElementById('root'));