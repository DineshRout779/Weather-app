const WeatherInfo = ({ weather }) => {
  return (
    <div className='weather text-center'>
      <div className='weather-temp bg-text'>
        {Math.round(weather.main.temp)}
        <sup style={{ fontWeight: 'normal' }}>o</sup>
      </div>
      <div className='weather-type md-text'>{weather.weather[0].main}</div>
    </div>
  );
};
export default WeatherInfo;
