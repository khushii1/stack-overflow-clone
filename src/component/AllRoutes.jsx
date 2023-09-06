import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Auth from '../pages/Auth'
import Questions from '../pages/Questions'
import AskQuestion from '../pages/AskQuestion'
import DisplayQuestion from './DisplayQuestion'
import Plan from './Plan'
import Color from './Color'

import Users from "../pages/Users/Users"

import Tags from '../pages/Tags/Tags'
import UserProfile from '../pages/UserProfile/UserProfile'

function AllRoutes() {
  return (
       <>
       <Routes>
       <Route  path='/' element={< Home />}></Route>
       <Route  path='/Auth' element={< Auth />}></Route>
       <Route path='/Questions' element={<Questions/>}></Route>
       <Route path='/AskQuestion' element={<AskQuestion/>}></Route>
       <Route path='/Questions/:id' element={<DisplayQuestion/>}></Route>
        <Route path='/Plan' element={<Plan/>}></Route>
     <Route path='/Color' element={<Color/>}></Route>
     <Route
        path="/Tags"
        element={<Tags />}
      />
      <Route
        path="/Users"
        element={<Users/>}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile  />
        }
      />
    </Routes>
      
       </>
  )
}


export default AllRoutes

 
