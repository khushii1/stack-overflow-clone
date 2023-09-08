import React from 'react'
import { useEffect, useState } from "react";







  
const Color = () => {

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    //const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
  
        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result.weather[0]);
        });
      }
      fetchData();
    }, [lat,long])
    
    return (
    <div>
      
    </div>
  )
}

export default Color
