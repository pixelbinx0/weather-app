// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() === '') return;
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="weather_search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="search_input"
      />
      <button type="submit" className="search_btn">Search</button>
    </form>
  );
};

export default SearchBar;
