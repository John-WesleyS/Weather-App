export const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
};

export const formatHourlyForecast = (list) => {
  return list.slice(0, 8).map((item) => {
    return {
      time: new Date(item.dt * 1000).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      }),

      temp: item.main.temp,

      icon: item.weather[0].icon,

      description: item.weather[0].description,
    };
  });
};

export const formatDailyForecast = (forecastList) => {
  const days = {};

  forecastList.forEach((item) => {
    const date = new Date(item.dt * 1000);

    const dateKey = date.toLocaleDateString();

    if (!days[dateKey]) {
      days[dateKey] = [];
    }

    days[dateKey].push(item);
  });

  return Object.keys(days)
    .slice(0, 5)
    .map((dateKey) => {
      const dayData = days[dateKey];

      const temperatures = dayData.map((item) => item.main.temp);

      const middleItem = dayData[Math.floor(dayData.length / 2)];

      return {
        date: formatDay(dayData[0].dt),

        maxTemp: Math.round(Math.max(...temperatures)),

        minTemp: Math.round(Math.min(...temperatures)),

        icon: middleItem.weather[0].icon,

        description: middleItem.weather[0].description,
      };
    });
};

export const formatDay = (timestamp) => {
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString([], {
    weekday: "long",
  });
};
