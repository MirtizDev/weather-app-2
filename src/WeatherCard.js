import React from 'react'

function WeatherCard({data}) {
    let img = `../../icons/${data.weather[0].icon}.png`;

    const farenheittocelcius = (temp) => {
        let celcius = (temp - 273);
        return Math.floor(celcius)
    }    
  return (
    <div className='inner-weather'>
        <h2 className='weather-name'>{data.name} - ({data.sys.country})</h2>
        <img src={img} style={{width:'17rem'}}/>
        <h3 className='weather-temp special'><i class="fa-solid fa-temperature-three-quarters"></i>{farenheittocelcius(data.main.temp)} °C</h3>
        <div className='details'>
            <h3 className='weather-temp'><i class="fa-solid fa-droplet"></i>{data.main.humidity} %</h3>
            <h3 className='weather-temp'><i class="fa-solid fa-meteor"></i>{data.main.pressure} KPa</h3>
            <h3 className='weather-temp'><i class="fa-solid fa-wind"></i>{data.wind.speed} km/h</h3>
        </div>
        
    </div>
    
  )
}

export default WeatherCard