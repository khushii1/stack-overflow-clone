import React, { useEffect } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './Navbar.css'
import Avtar from './Avtar';
import { setCurrentUser } from '../actions/currentUser'



export default function Navbar() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

   var User=useSelector((state)=>(state.currentUserReducer))
useEffect(()=>{
   dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
},[dispatch])
  return (
    <div className='navbar'>
         <Link to='/' className='logo-img'> <img src={Logo} alt=".Logo"  />
          </Link>
          <Link to="/" className='nav-item'>About</Link>
          <Link to="/" className='nav-item'>Products</Link>
          <Link to="/" className='nav-item'>For Teams</Link>
          <Link to="/Plan" className='nav-item'>Register</Link>
           <form>
          <div className='search-icon'>
            <input type="text"className='nav-item-search' placeholder='Search...' />
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
           
          </div>
        </form>
       

       {User === null ? (
            <Link to="/Auth" className="nav-item-LOGIN">
              Log in
            </Link>
          ) : (
            <>
              <Avtar
                backgroundColor="#009dff"
                px="10px"
                py="15px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avtar>
              <button className="nav-item-LOGIN" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
          
 

          
         
        
       
    </div>
  )
}

