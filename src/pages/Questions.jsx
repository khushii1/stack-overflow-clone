/*import React from 'react'
import LeftSidebar from '../component/LeftSidebar'
import RightBar from '../component/RightBar'
import HomeMainbar from '../component/HomeMainbar'
import '../App.css'
function Questions() {
  return (
    <div style={{ display:"flex"}}>
      
<div className="home-container-1">
      <LeftSidebar/>
      </div>
      <div className="home-container-2">
      <HomeMainbar/>
      <RightBar/>
      </div>
    </div>
  )
}

export default Questions

    

*/
import React from "react";

import '../App.css';
import LeftSidebar from '../component/LeftSidebar';
import RightBar from '../component/RightBar';
import HomeMainbar from '../component/HomeMainbar';

const Questions = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightBar />
      </div>
    </div>
  );
};

export default Questions;
