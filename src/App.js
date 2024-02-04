import React, { useEffect, useState } from 'react';
import './App.css';
import Today from './Today';
import Icon from './Icon';
import WeatherInfo from './WeatherInfo';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: process.env.REACT_APP_API_BASE,
};

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery('');
        });
    }
  };

  const time = new Date();
  let hours = time.getHours();

  useEffect(() => {
    const fetchInitialWeatherData = async () => {
      fetch(`${api.base}weather?q=New+Delhi&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setWeather(data);
        });
    };
    fetchInitialWeatherData();
  }, []);

  return (
    <div className={hours > 19 ? 'App night' : 'App'}>
      <div className='container'>
        <div className='app-header'>
          <input
            type='search'
            className='search'
            placeholder='Seach a city'
            name='search'
            id='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
            autoComplete='off'
          />
        </div>
      </div>
      <div className='container'>
        <div className='app-content'>
          {typeof weather.main !== 'undefined' ? (
            <div>
              <Icon iconCode={weather?.weather[0].icon} />
              <WeatherInfo weather={weather} />
              <div className='location text-center'>
                <h3 className='md-text'>
                  {weather.name}, {weather.sys.country}
                </h3>
              </div>
              <Today />
            </div>
          ) : (
            <div>
              <div>
                <div className='location text-center'>
                  <h3 className='md-text'>New Delhi, IN</h3>
                </div>
                <Today />
                <div className='weather text-center'>
                  <Icon />
                  <div className='weather-temp bg-text'>
                    30<sup>o</sup>C
                  </div>
                  <div className='weather-type md-text'>Sunny</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
