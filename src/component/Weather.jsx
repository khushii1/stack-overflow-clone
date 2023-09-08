import React, { useState} from 'react';


export default function Weather() {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
   function handleLocationClick() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }
    }
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ latitude, longitude });
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  
      // Make API call to OpenWeatherMap
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=90986bfae3e5134681f24d3e858c2257&units=metric`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          console.log(data.weather[0].main);
          let weather_condition = data.weather[0].main;

          if(weather_condition === 'Clouds'){
                let root = document.querySelector('#root');
                root.style.backgroundColor = 'rgb(88, 94, 90)'; 
          }

          
          if(weather_condition === 'Scattered Thunderstorms'){
            let root = document.querySelector('#root');
            root.style.backgroundColor = 'rgb(88, 94, 190)'; 
      }

      
      if(weather_condition === 'Sunny'){
        let root = document.querySelector('#root');
        root.style.backgroundColor = 'white'; 
        
  }

  if(weather_condition === 'Haze'){
    let root = document.querySelector('#root');
    root.style.backgroundColor = 'rgb(88, 94, 190)'; 
    
}



        })
        .catch(error => console.log(error));
    }
  
    function error() {
      console.log("Unable to retrieve your location");
    }
  
    return (
      <div>
         {!location ? <button onClick={handleLocationClick}>Get Location</button> : null}
  {location && !weather ? <p>Loading weather data...</p> : null}
  {weather ? (
    <div>
       <p>Location: {weather.name}</p>
  <p>Temperature: {weather.main.temp} °C</p>
     
     </div>
  ) : null}

      </div>
    );
  }
  


