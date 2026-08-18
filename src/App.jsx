import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import {
  getWeather,
  getWeatherByLocation,
  getForecast,
  getForecastByLocation
} from "./services/weatherApi";
import { formatHourlyForecast, formatDailyForecast } from "./services/weatherTimestamp";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";
import LocationButton from "./components/LocationButton";

import { LoaderCircle } from "lucide-react";

function App() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const handleSearch = async (city) => {

    try {

      setLoading(true);
      setError("");

      const weatherData = await getWeather(city);

      const forecastData = await getForecast(city);

      const hourlyData = formatHourlyForecast(
        forecastData.list
      );

      const dailyData = formatDailyForecast(
        forecastData.list
      );

      setWeather(weatherData);
      setHourlyForecast(hourlyData);
      setDailyForecast(dailyData);

    } catch (error) {

      setWeather(null);
      setHourlyForecast([]);
      setDailyForecast([]);

      setError("City not found. Please try again.");

    } finally {

      setLoading(false);

    }
  };
  const handleLocation = async (latitude, longitude) => {

    try {

      setLoading(true);
      setError("");

      const weatherData =
        await getWeatherByLocation(
          latitude,
          longitude
        );

      const forecastData =
        await getForecastByLocation(
          latitude,
          longitude
        );

      const hourlyData =
        formatHourlyForecast(
          forecastData.list
        );

      const dailyData =
        formatDailyForecast(
          forecastData.list
        );

      setWeather(weatherData);
      setHourlyForecast(hourlyData);
      setDailyForecast(dailyData);

    } catch (error) {

      setWeather(null);
      setHourlyForecast([]);
      setDailyForecast([]);

      setError(
        "Unable to get weather for your location."
      );

    } finally {

      setLoading(false);

    }
  };
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 sm:px-6">

      <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">

        <SearchBar onSearch={handleSearch} />

        <LocationButton onLocation={handleLocation} />

        {loading && (
          <div className="flex flex-col items-center gap-3 py-10">

            <LoaderCircle
              size={40}
              className="animate-spin text-slate-600"
            />

            <p className="text-slate-500">
              Fetching weather...
            </p>

          </div>
        )}

        {error && (
          <div className="w-full bg-red-50 border border-red-200 rounded-2xl p-4 text-center">

            <p className="font-semibold text-red-600">
              Unable to fetch weather
            </p>

            <p className="text-sm text-red-500 mt-1">
              {error}
            </p>

          </div>
        )}

        {weather && !loading && (
          <>
            <CurrentWeather weather={weather} />

            <HourlyForecast
              forecast={hourlyForecast}
            />

            <DailyForecast
              forecast={dailyForecast}
            />
          </>
        )}

      </div>

    </div>
  );
}

export default App;