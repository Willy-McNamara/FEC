import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem.jsx';

const QuestionsList = ({showMore, shownQ, product, questions, setQuestions}) => {



  if (questions === 'init') {
    return (
      <div>
        <p>loading questions...</p>
      </div>
    );
  } else {
    // conditional rendering
    const [renderedQuestions, setRenderedQuestions] = useState(questions.results.sort(sortByHelpful).slice(0, shownQ));


    const sortByHelpful = (a, b) => {
      return a.question_helpfulness - b.question_helpfulness;
    }

    const moreQuestions = () => {
      showMore(shownQ + 2);
      setRenderedQuestions(questions.results.sort(sortByHelpful).slice(0, shownQ));
      setQuestions('init');
    }


    return (
      <div>
        {renderedQuestions.map(q=><QuestionItem question={q} product={product} setQuestions={setQuestions}/>)}
        <button className="more-questions" onClick={()=>moreQuestions()}>Show More Questions</button>
      </div>
    )
  }



}

export default QuestionsList;