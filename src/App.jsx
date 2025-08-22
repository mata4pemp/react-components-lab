// src/App.jsx
import weatherForecasts from "../data/data"; //the data file
import WeatherForecast from "../components/WeatherForecast"; //the actual component

const App = () => {
  return(
  <>
    <h1>Local Weather</h1>
    {/* for each data point,  */}
    <section>
      {weatherForecasts.map((forecast) => (
        <WeatherForecast
          day={forecast.day}
          img={forecast.img}
          imgAlt={forecast.imgAlt}
          conditions={forecast.conditions}
          time={forecast.time}
        />
      ))}
    </section>
  </>
  );
};

export default App;
