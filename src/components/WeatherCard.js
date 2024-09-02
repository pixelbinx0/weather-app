import React, { useEffect, useState } from "react";
import "./WeatherCard.css";



const WeatherCard = ({ data }) => {
  const [showCard, setShowCard] = useState(false); // State to manage animation

  const { name, main: { temp, humidity }, weather, wind: { speed } } = data;
  const weatherDescription = weather[0].description;
  const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  useEffect(() => {
    // Trigger animation when data is loaded
    setShowCard(false); // Reset animation
    const timer = setTimeout(() => setShowCard(true), 100); // Add slight delay to trigger animation

    // Clean up timeout on component unmount
    return () => clearTimeout(timer);
  }, [data]); // Depend on data prop

  return (
    <div className={`weather-card ${showCard ? "show" : ""}`}> {/* Add dynamic class */}
      <h2>{name}</h2>
      <img src={weatherIcon} alt={weatherDescription} />
      <p className="temperature">{Math.round(temp)}°C</p>
      <p className="description">{weatherDescription}</p>
      <p className="humidity">Humidity: {humidity}%</p>
      <p className="wind-speed">Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
