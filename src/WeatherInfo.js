const WeatherInfo = ({ weather }) => {
  return (
    <div className='weather text-center'>
      <div className='weather-temp bg-text'>
        {Math.round(weather.main.temp)}
        <sup style={{ fontWeight: 'normal' }}>o</sup>
      </div>
      <div className='weather-type md-text'>{weather.weather[0].main}</div>

      <div className='weather-info-more'>
        <div className='weather-info-more-item'>
          <p style={{ fontWeight: 'bold' }}>{weather?.wind?.speed} kms/hr</p>
          <p style={{ color: '#ddd' }}>Wind</p>
        </div>
        <div className='weather-info-more-item'>
          <p style={{ fontWeight: 'bold' }}>{weather?.main?.humidity}%</p>
          <p style={{ color: '#ddd' }}>Humidity</p>
        </div>
      </div>
    </div>
  );
};
export default WeatherInfo;
