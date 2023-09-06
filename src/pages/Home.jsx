import React from 'react'
import LeftSidebar from '../component/LeftSidebar'
import RightBar from '../component/RightBar'
import HomeMainbar from '../component/HomeMainbar'
import '../App.css'
import Weather from '../component/Weather'


const Home = ({ slideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
        <HomeMainbar />
        <RightBar />
        <Weather/>
      </div>
    </div>
  );
};

export default Home;
    


