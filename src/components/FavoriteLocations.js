// src/components/FavoriteLocations.js

import React from 'react';
import { useWeatherContext } from '../context';
import { fetchWeather } from '../api';

const FavoriteLocations = () => {
  const { favorites, removeFavorite } = useWeatherContext();
  const [weatherData, setWeatherData] = React.useState([]);

  React.useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const weatherPromises = favorites.map((city) => fetchWeather(city));
        const results = await Promise.all(weatherPromises);
        setWeatherData(results);
      } catch (error) {
        console.error('Error fetching favorite locations:', error);
      }
    };

    fetchFavorites();
  }, [favorites]);

  return (
    <div className="favorite-locations-container">
      <h2 className="favorite-locations-title">Favorite Locations</h2>
      {weatherData.length === 0 ? (
        <p>No favorite locations added yet.</p>
      ) : (
        weatherData.map((data) => (
          <div key={data.id} className="favorite-item">
            <div className="weather-info">
              <span className="city-name">{data.name}</span>
              <span className="temperature">{Math.round(data.main.temp)}°C</span>
              <span className="weather-description">
                {data.weather[0].description}
              </span>
            </div>
            <button onClick={() => removeFavorite(data.name)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteLocations;
