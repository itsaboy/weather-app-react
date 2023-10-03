import dayjs from "dayjs";

const ForecastDayFive = ({ forecast, weather }: any) => {
  return (
    <section className="bg-gradient-to-b from-blue-300 to-blue-200 p-4 border text-md text-slate-950 border-blue-950 rounded-2xl w-full">
      <div className="forecast-day-container">
        <h3 className="text-2xl text-slate-950">
          {dayjs
            .unix(weather.dt + weather.timezone)
            .add(5, "day")
            .startOf("day")
            .format("dddd")}
        </h3>
        <h3 className="text-xl text-slate-950">
          {dayjs
            .unix(weather.dt + weather.timezone)
            .add(5, "day")
            .startOf("day")
            .format("MMM-D-YYYY")}
        </h3>
        <h3 className="text-xl">{forecast.list[4].weather[0].main}</h3>
        {forecast.list[4].weather[0].main === "Mist" && (
          <img className="w-12" src="/public/icons/misty.svg" />
        )}
        {forecast.list[4].weather[0].main === "Clear" && (
          <img className="w-12" src="/public/icons/sunny.svg" />
        )}
        {forecast.list[4].weather[0].main === "Clouds" && (
          <img className="w-12" src="/public/icons/cloudy.svg" />
        )}
        {forecast.list[4].weather[0].main === "Rain" && (
          <img className="w-12" src="/public/icons/rainy.svg" />
        )}
        {forecast.list[4].weather[0].main === "Thunderstorms" && (
          <img className="w-12" src="/public/icons/stormy.svg" />
        )}
        {forecast.list[4].weather[0].main === "Snow" && (
          <img className="w-12" src="/public/icons/snowy.svg" />
        )}
        {forecast.list[4].weather[0].main === "Haze" && (
          <img className="w-12" src="/public/icons/hazy.svg" />
        )}
        {forecast.list[4].main === "Fog" && (
          <img className="w-12" src="/public/icons/foggy.svg" />
        )}
        {forecast.list[4].main === "Drizzle" && (
          <img className="w-12" src="/public/icons/drizzle.svg" />
        )}
        <h3>{`Temp: ${forecast.list[4].main.temp.toFixed(0)}° F`}</h3>
        <h3>{`Feels: ${forecast.list[4].main.feels_like.toFixed(0)}° F`}</h3>
        <h3>{`Humidity: ${forecast.list[4].main.humidity}%`}</h3>
        <h3>{`Wind: ${forecast.list[4].wind.speed} mph`}</h3>
      </div>
    </section>
  );
};

export default ForecastDayFive;
