function WeatherData({ day, conditions, time, children }) {
  return (
    <div>
      <p>{day}</p>
      {children}
      <p>conditions: {conditions}</p>
      <p>time: {time}</p>
    </div>
  );
}

export default WeatherData;
