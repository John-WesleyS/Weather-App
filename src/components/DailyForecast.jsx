function DailyForecast({ forecast }) {

    return (
        <div className="bg-white rounded-3xl shadow-lg p-6">

            {/* Header */}
            <div className="mb-4">

                <h2 className="text-xl font-bold text-slate-800">
                    5-Day Forecast
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Weather for the upcoming days
                </p>

            </div>


            {/* Daily Forecast */}
            <div>

                {forecast.map((item, index) => (

                    <div
                        key={index}
                        className="
                            flex
                            items-center
                            justify-between
                            gap-4
                            py-4
                            border-b
                            last:border-b-0
                        "
                    >

                        {/* Day */}
                        <div className="w-24">

                            <p className="font-semibold text-slate-800">
                                {item.day}
                            </p>

                        </div>


                        {/* Weather */}
                        <div className="flex items-center gap-3 flex-1">

                            <img
                                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                                alt={item.description}
                                className="w-12 h-12"
                            />

                            <p className="text-sm text-slate-500 capitalize">
                                {item.description}
                            </p>

                        </div>


                        {/* Temperature */}
                        <div className="flex items-center gap-3">

                            <p className="font-semibold text-slate-800">
                                {Math.round(item.maxTemp)}°C
                            </p>

                            <p className="text-slate-400">
                                {Math.round(item.minTemp)}°C
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default DailyForecast;