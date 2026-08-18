# 🌤️ Weather App

A responsive weather application built using **React.js, Tailwind CSS, and the OpenWeather API**.

The application allows users to search for weather information by city or use their current location to get real-time weather conditions, hourly forecasts, and a 5-day forecast.

---

## 📌 Features

### 🔍 City Weather Search

- Search weather information by city name.
- Automatically formats the entered city name.
- Converts input into a clean format before sending the API request.
- Handles empty search input.
- Displays an error message when the city cannot be found.

### 📍 Current Location Weather

- Uses the browser's Geolocation API.
- Retrieves the user's latitude and longitude.
- Fetches weather information based on the user's current location.
- Handles location permission and location-related errors.

### 🌡️ Current Weather

Displays:

- City name
- Country
- Current temperature
- Feels-like temperature
- Weather condition
- Weather icon
- Humidity
- Wind speed
- Atmospheric pressure
- Visibility

### 🕐 Hourly Forecast

- Displays upcoming hourly weather conditions.
- Shows:
  - Time
  - Weather icon
  - Temperature
  - Weather description
- Uses horizontal scrolling for smaller screens.
- Provides a responsive card-based layout.

### 📅 5-Day Forecast

Displays:

- Day
- Weather icon
- Weather condition
- Maximum temperature
- Minimum temperature

The forecast is displayed as a clean vertical list.

### 🔄 Loading State

While weather information is being retrieved:

- Displays a loading spinner.
- Shows a user-friendly loading message.
- Prevents outdated weather information from being displayed during a new request.

### ❌ Error Handling

The application handles:

- Empty city input
- Invalid city names
- Failed weather API requests
- Failed forecast requests
- Current location errors
- Invalid or unavailable location data

User-friendly error messages are displayed instead of exposing raw API errors.

### 📱 Responsive Design

The application is designed for:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

Tailwind CSS responsive utilities are used to adapt:

- Weather cards
- Forecast layouts
- Search interface
- Statistics grid
- Spacing
- Typography

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| JavaScript | Application logic |
| Tailwind CSS | Styling and responsive design |
| OpenWeather API | Weather and forecast data |
| Lucide React | UI icons |
| Vite | Development server and build tool |
| Browser Geolocation API | Current location detection |
| Git & GitHub | Version control |

---

# 🏗️ Project Architecture

```text
Weather App
│
├── React Application
│
├── Components
│   ├── SearchBar
│   ├── LocationButton
│   ├── CurrentWeather
│   ├── HourlyForecast
│   └── DailyForecast
│
├── Services
│   ├── weatherApi
│   └── weatherTimestamp
│
└── OpenWeather API
    ├── Current Weather
    └── 5-Day / 3-Hour Forecast
weather-app/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── LocationButton.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── HourlyForecast.jsx
│   │   └── DailyForecast.jsx
│   │
│   ├── services/
│   │   ├── weatherApi.js
│   │   └── weatherTimestamp.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
📁 File Responsibilities
App.jsx

Acts as the main controller of the application.

Responsible for:

Managing weather state
Managing loading state
Managing error state
Handling city searches
Handling location-based searches
Fetching current weather
Fetching forecast data
Passing data to child components
