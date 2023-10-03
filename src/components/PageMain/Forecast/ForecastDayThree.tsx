import dayjs from "dayjs";

const ForecastDayThree = ({ forecast, weather }: any) => {
  return (
    <section className="bg-gradient-to-b from-blue-300 to-blue-200 p-4 border text-md text-slate-950 border-blue-950 rounded-2xl w-full">
      <div className="forecast-day-container">
        <h3 className="text-2xl text-slate-950">
          {dayjs
            .unix(weather.dt + weather.timezone)
            .add(3, "day")
            .startOf("day")
            .format("dddd")}
        </h3>
        <h3 className="text-xl text-slate-950">
          {dayjs
            .unix(weather.dt + weather.timezone)
            .add(3, "day")
            .startOf("day")
            .format("MMM-D-YYYY")}
        </h3>
        <h3 className="text-xl">{forecast.list[2].weather[0].main}</h3>
        {forecast.list[2].weather[0].main === "Mist" && (
          <img className="w-12" src="/public/icons/misty.svg" />
        )}
        {forecast.list[2].weather[0].main === "Clear" && (
          <img className="w-12" src="/public/icons/sunny.svg" />
        )}
        {forecast.list[2].weather[0].main === "Clouds" && (
          <img className="w-12" src="/public/icons/cloudy.svg" />
        )}
        {forecast.list[2].weather[0].main === "Rain" && (
          <img className="w-12" src="/public/icons/rainy.svg" />
        )}
        {forecast.list[2].weather[0].main === "Thunderstorms" && (
          <img className="w-12" src="/public/icons/stormy.svg" />
        )}
        {forecast.list[2].weather[0].main === "Snow" && (
          <img className="w-12" src="/public/icons/snowy.svg" />
        )}
        {forecast.list[2].weather[0].main === "Haze" && (
          <img className="w-12" src="/public/icons/hazy.svg" />
        )}
        {forecast.list[2].main === "Fog" && (
          <img className="w-12" src="/public/icons/foggy.svg" />
        )}
        {forecast.list[2].main === "Drizzle" && (
          <img className="w-12" src="/public/icons/drizzle.svg" />
        )}
        <h3>{`Temp: ${forecast.list[2].main.temp.toFixed(0)}° F`}</h3>
        <h3>{`Feels: ${forecast.list[2].main.feels_like.toFixed(0)}° F`}</h3>
        <h3>{`Humidity: ${forecast.list[2].main.humidity}%`}</h3>
        <h3>{`Wind: ${forecast.list[2].wind.speed} mph`}</h3>
      </div>
    </section>
  );
};

export default ForecastDayThree;
