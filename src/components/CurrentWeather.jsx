import {
    Droplets,
    Wind,
    Gauge,
    Eye
} from "lucide-react";
function CurrentWeather({ weather }) {

    return (
        <div className="bg-white rounded-3xl shadow-lg p-6">

            {/* Main Weather Information */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* Location Information */}
                <div>

                    <p className="text-sm text-slate-500">
                        Current Weather
                    </p>

                    <h2 className="text-3xl font-bold text-slate-800 mt-1">
                        {weather.name}, {weather.sys.country}
                    </h2>

                    <p className="text-slate-500 capitalize mt-2">
                        {weather.weather[0].description}
                    </p>

                </div>


                {/* Temperature Information */}
                <div className="flex items-center">

                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt={weather.weather[0].description}
                        className="w-24 h-24"
                    />

                    <div>

                        <p className="text-5xl font-bold text-slate-800">
                            {Math.round(weather.main.temp)}°C
                        </p>

                        <p className="text-sm text-slate-500">
                            Feels like{" "}
                            {Math.round(weather.main.feels_like)}°C
                        </p>

                    </div>

                </div>

            </div>


            {/* Weather Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                {/* Humidity */}
                <div className="bg-slate-50 rounded-2xl p-4">

                    <div className="flex items-center gap-2 text-slate-500">

                        <Droplets size={20} />

                        <p className="text-sm">
                            Humidity
                        </p>

                    </div>

                    <p className="text-xl font-semibold text-slate-800 mt-3">
                        {weather.main.humidity}%
                    </p>

                </div>


                {/* Wind */}
                <div className="bg-slate-50 rounded-2xl p-4">

                    <div className="flex items-center gap-2 text-slate-500">

                        <Wind size={20} />

                        <p className="text-sm">
                            Wind
                        </p>

                    </div>

                    <p className="text-xl font-semibold text-slate-800 mt-3">
                        {weather.wind.speed} m/s
                    </p>

                </div>


                {/* Pressure */}
                <div className="bg-slate-50 rounded-2xl p-4">

                    <div className="flex items-center gap-2 text-slate-500">

                        <Gauge size={20} />

                        <p className="text-sm">
                            Pressure
                        </p>

                    </div>

                    <p className="text-xl font-semibold text-slate-800 mt-3">
                        {weather.main.pressure} hPa
                    </p>

                </div>


                {/* Visibility */}
                <div className="bg-slate-50 rounded-2xl p-4">

                    <div className="flex items-center gap-2 text-slate-500">

                        <Eye size={20} />

                        <p className="text-sm">
                            Visibility
                        </p>

                    </div>

                    <p className="text-xl font-semibold text-slate-800 mt-3">
                        {(weather.visibility / 1000).toFixed(1)} km
                    </p>

                </div>

            </div>

        </div>
    );
}

export default CurrentWeather;