import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';

const QuestionsList = ({product}) => {
  // const [ , ] = useState( );

  // useEffect(() => {

  // }, [])

  return (
    <div>
      <QuestionItem product={product}/>
    </div>
  )
}

export default QuestionsList;