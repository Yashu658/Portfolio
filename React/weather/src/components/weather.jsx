import React, { useState } from "react";

const Weather = () => {

  const [place, setPlace] = useState("");
  const [mausam, setMausam] = useState();

  const API_KEY = "1cefe43006e662107c8d0454bde6852c";

  const get_weather = async () => {
    try {
      const Loc_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=${API_KEY}`;
      const locRes = await fetch(Loc_URL);
      const locData = await locRes.json();

      if (!locData.length) {
        setMausam(null);
        return;
      }

      const { lat, lon } = locData[0];

      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const weatherRes = await fetch(weatherURL);
      const weatherData = await weatherRes.json();

      setMausam(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-10 flex justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full grid gap-6 border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            🌤️ Check Your Weather
          </h2>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter City Name"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            className="p-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all duration-300"
          />
          <button
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-4 rounded-xl hover:from-blue-600 hover:to-indigo-600 shadow-lg transition-all duration-300"
            onClick={get_weather}
          >
            🔍 Get Weather
          </button>
        </div>
      </div>

      {mausam && mausam.cod === 200 ? (
        <div className="container mx-auto text-center mt-8 space-y-4">
          <span className="text-xl">
          🌡️ Temperature: <p className="text-red-600">{mausam.main.temp}°C</p>
          </span>
          <br />
          <span className="text-xl">
             🌥️ Condition: <p className="gap-4">{mausam.weather[0].description}</p>
          </span>
          <img
            src={`https://openweathermap.org/img/wn/${mausam.weather[0].icon}@2x.png`}
            alt={mausam.weather[0].description}
            className="inline-block"
          />
        </div>
      ) : mausam === null ? (
        <div className="text-center mt-8 text-red-500">
          <span>❌ No data found for "{place}"</span>
        </div>
      ) : null}
    </>
  );
};

export default Weather;
