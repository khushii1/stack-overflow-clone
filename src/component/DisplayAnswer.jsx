/*import React from 'react'
import { Link } from 'react-router-dom'
import Avtar from './Avtar'

const DisplayAnswer = ({ question }) => {
    return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div>
                                <button type='button'>Share</button>
                                <button type='button'>Delete</button>
                            </div>
                            <div>
                                <p>answered{ans.answeredOn}</p>
                                <Link to={`/User/${question.userId}`} className='user-Link' style={{ color: '#0086d8' }}>
                                    <Avtar backgroundColor="green" px='8px' py='5px'>M</Avtar>
                                    <div>
                                        {
                                            ans.userAnswered
                                        }
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer
*/



import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avtar from './Avtar'
import { deleteAnswer } from "../actions/question"

const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              {User?.result?._id === ans?.userId && (
                <button
                  type="button"
                  onClick={() => handleDelete(ans._id, question.noOfAnswers)}
                >
                  Delete
                </button>
              )}
            </div>
            <div>
              <p>answered {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avtar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered.charAt(0).toUpperCase()}
                </Avtar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;