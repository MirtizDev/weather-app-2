import './App.css';
import { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

function App () {
  const [city, setCity] = useState('');
  const [data, setData] = useState();
  const [error,setError] = useState(false)
  const api_key = '23701a6990b9accf15045df529cc1625';

  const searchBtn = document.querySelector('.search-btn')
  const handleClick = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`).then(res=>res.json()).then(data => setData(data)).catch(setError(true));
    setCity('')
  }


  

  console.log(data);

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      searchBtn.click();
    }
  } 
   
  return (
    <div className="App">
      <div className='search-part'>
        <input className='search-input' placeholder='Search city' type="text" value={city} onKeyDown={e => handleKeyDown(e)} onChange={e => setCity(e.target.value)}/>
        <button onClick={handleClick} className='search-btn' >Search</button>
      </div>
      {data &&
      <div className='weather-card'>
      <WeatherCard data={data}/>
    </div>
      }
          
    </div>
  );
}

export default App;
