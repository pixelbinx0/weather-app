import React, { createContext, useState, useContext } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (city) => {
    setFavorites((prevFavorites) => [...prevFavorites, city]);
  };

  const removeFavorite = (city) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== city));
  };

  return (
    <WeatherContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
