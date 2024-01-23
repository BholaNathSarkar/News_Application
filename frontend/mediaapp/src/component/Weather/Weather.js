import React, { useState } from "react";
import "./Weather.css";

const Weather = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleLocationClick() {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
      setLoading(false);
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b917ebfc0723789ed9d11eba885146f3&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function error() {
    console.log("Unable to retrieve your location");
    setLoading(false);
  }

  const weatherContainerStyles = {
    marginTop: "-33px",
  };

  return (
    <div style={weatherContainerStyles}>
      <div className="border1">
        <div className="col">
          <h3>City: {weather && weather.name}</h3>
        </div>
        <div className="col">
          <p>Weather: {loading ? "Loading..." : "Sunny"}</p>
        </div>
        <div className="col">
          <p>Temperature: {weather && weather.main.temp} °C</p>
        </div>
        <div className="col">
          <button
            onClick={handleLocationClick}
            type="button"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Getting Weather..." : "Get Weather"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
