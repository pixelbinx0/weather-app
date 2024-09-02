import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import FavoriteLocations from './FavoriteLocations';
import { fetchWeather } from '../api';
import { WeatherProvider, useWeatherContext } from '../context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

const App = () => {
  return (
    <WeatherProvider>
      <div className="App">
        <MainContent />
        <FavoriteLocations />
        <ToastContainer
          position="bottom-right"  // Moves the toast to the bottom right
          autoClose={3000}         // Adjusts the auto-close time
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover /> {/* Add ToastContainer to render toast notifications */}
      </div>
    </WeatherProvider>
  );
};

const MainContent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const { addFavorite } = useWeatherContext();

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      toast.error('Error fetching weather data: ' + error.message); // Use toast error for displaying errors
    }
  };

  const handleAddFavorite = () => {
    if (weatherData && weatherData.name) {
      addFavorite(weatherData.name);
      toast.success(`${weatherData.name} has been added to favorites locations!`); // Use toast success for success messages
    }
  };

  return (
    <div className="main-content">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {weatherData && (
        <div className="current-weather">
          <WeatherCard data={weatherData} />
          <button className="add-favorite-button" onClick={handleAddFavorite}>
            Add to Favorites
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
