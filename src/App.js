/*import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './component/Navbar';
import AllRoutes from './component/AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

import { fetchAllQuestions } from "./actions/question";
import { useEffect } from "react";
import { fetchAllUsers } from "./actions/users";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

return (
    <div className="App">
      
      <Router>
     
        <Navbar/>
       <AllRoutes/>
        </Router>
       
      
    </div>
  );
}

export default App;
*/


import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./component/Navbar";
import AllRoutes from "./component/AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
      <Router>
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </Router>
    </div>
  );
}

export default App;