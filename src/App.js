// src/components/App.js
import React from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import { WeatherProvider } from "../context";

const App = () => {
  return (
    <WeatherProvider>
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <WeatherCard />
        </header>
      </div>
    </WeatherProvider>
  );
};

export default App;
