import React, { useState } from 'react'
import axios from 'axios'
import './App.css'; 
const App = () => {
  const [city , setCity] = useState('');
  const [weather , setWeather] = useState('');
  const cityHandler = (e)=>{
     setCity(e.target.value);
  }
  let API_URL = "06fed33188cc0d74dd631bfb4c2c6bd0" ; 
     async function weatherData(){
    try{
     let weatherResponse =   await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_URL}`)

    setWeather(weatherResponse);
    console.log(weatherResponse);
    
    }

    catch{
(error)=>{
    console.log('error in api is  :' +  error)
}   }

  }

 


 
  return (

    < >
    <div className='container'>
<input type='text' placeholder='enter city name' value={city} onChange={cityHandler}/>
    
<br></br>
<br></br>

<button onClick={weatherData}>Get Weather</button>

{weather && 
<>
<p> city : {weather.data.name}</p>
<p> humidity :{weather.data.main.humidity}</p>
<p>  condition : {weather.data.weather[0].main}</p>
<p>  wind speed :  {weather.data.wind.speed + ' km/h'}</p>
<p>Temperature: {Math.round(weather.data.main.temp - 273.15)}°C</p>
</>
}
</div>
    </>
  )
}

export default App ;