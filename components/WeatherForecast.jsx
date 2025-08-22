import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <WeatherData day={day} conditions={conditions} time={time}>
      <WeatherIcon img={img} imgAlt={imgAlt} />
    </WeatherData>
  );
}

export default WeatherForecast;
