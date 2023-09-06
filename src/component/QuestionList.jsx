/*import React from 'react'
import Question from './Question'

const QuestionList = ({questionList}) => {
  return (
    <>
    <div>
   { questionList.map((question)=>(
                   <Question question={question} key={question.id}/>
                ))
   }
    </div>
    </>
  )
}

export default QuestionList*/


import React from "react";
import Question from "./Question";
const QuestionList = ({ questionsList }) => {
  return (
    <>
      {questionsList.map((question) => (
        <Question question={question} key={question._id} />
      ))}
    </>
  );
};

export default QuestionList;
