import React from 'react'
import'./LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';

function LeftSidebar() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
   // document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <div>
         <div className="left-sidebar">
            <nav className="side-nav">
            <div id="google_translate_element"></div>
                <NavLink to ='/' className="side-nav-links" activeClass='active'>
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                    <div><p style={{marginTop:"20px"}}>PUBLIC</p></div>
                    <NavLink to='/Questions' className="side-nav-links">
                      <p style={{ marginTop:"20px"}}>Questions</p>
                    </NavLink>
                    <NavLink to="/Tags" className="side-nav-links"activeClass='active'>
                      <p style={{paddingLeft:"30px" ,marginTop:"20px"}}>Tags</p>
                    </NavLink>
                    <NavLink to="/users" activeClass='active' className="side-nav-links">
                      <p style={{paddingLeft:"30px" ,marginTop:"20px"}}>Users</p>
                    </NavLink>
                </div>
            </nav>
         </div>
    </div>
  )
}

export default LeftSidebar


