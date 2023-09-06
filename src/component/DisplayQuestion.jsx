/*import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightBar from './RightBar'
import QuestionDetails from './QuestionDetails'

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
    <LeftSidebar/>
   
    <div className="home-container-2">
  <QuestionDetails/>
    <RightBar/>
    
    </div>
 </div>
  )
}

export default DisplayQuestion
*/

import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightBar from './RightBar';
import QuestionDetails from './QuestionDetails';

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar  />
      <div className="home-container-2">
        <QuestionDetails />
        <RightBar />
      </div>
    </div>
  );
};

export default DisplayQuestion;