const Icon = ({ iconCode }) => {
  return (
    <div className='weather-icon'>
      <img
        src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
        className='icon'
        alt=''
      />
    </div>
  );
};

export default Icon;
