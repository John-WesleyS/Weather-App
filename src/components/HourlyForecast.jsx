function HourlyForecast({ forecast }) {

    return (
        <div className="bg-white rounded-3xl shadow-lg p-6">

            {/* Section Header */}
            <div className="mb-5">

                <h2 className="text-xl font-bold text-slate-800">
                    Hourly Forecast
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Weather for the next few hours
                </p>

            </div>


            {/* Forecast Container */}
            <div className="flex gap-4 overflow-x-auto pb-2">

                {forecast.map((item, index) => (

                    <div
                        key={index}
                        className="
                            min-w-[110px]
                            bg-slate-50
                            rounded-2xl
                            p-4
                            text-center
                            flex-shrink-0
                        "
                    >

                        {/* Time */}
                        <p className="text-sm font-medium text-slate-500">
                            {item.time}
                        </p>


                        {/* Weather Icon */}
                        <img
                            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                            alt={item.description}
                            className="w-14 h-14 mx-auto my-2"
                        />


                        {/* Temperature */}
                        <p className="text-xl font-semibold text-slate-800">
                            {Math.round(item.temp)}°C
                        </p>


                        {/* Weather Description */}
                        <p className="text-xs text-slate-500 capitalize mt-1">
                            {item.description}
                        </p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default HourlyForecast;