import dayjs from "dayjs";

const Current = ({ weather }: any) => {
  return (
    <section
      id="current-seciton"
      className="text-slate-950 bg-gradient-to-b from-sky-400 to-sky-500 w-full border-2 border-sky-950 rounded-2xl shadow-sky-900 shadow-lg transition ease-in-out delay-150 hover:shadow-sky-900 hover:shadow-2xl hover:translate-y-1"
    >
      <div className="current-container">
        <h2 className="bg-gradient-to-b from-sky-950 to-sky-900 text-4xl text-slate-200 pt-4 h-full w-full border-b-2 rounded-t-xl border-sky-950 text-center">
          Current
        </h2>
        <div className="weather-container p-2">
          <h3 className="text-2xl text-slate-950">
            {dayjs.unix(weather.dt + weather.timezone).format("dddd")}
          </h3>
          <h3 className="text-2xl text-slate-950">
            {dayjs.unix(weather.dt + weather.timezone).format("MMM-D-YYYY")}
          </h3>
          <h3 className="text-2xl text-slate-950">{weather.weather[0].main}</h3>
          {weather.weather[0].main === "Mist" && (
            <img className="w-20" src="/public/icons/misty.svg" />
          )}
          {weather.weather[0].main === "Clear" && (
            <img className="w-20" src="/public/icons/sunny.svg" />
          )}
          {weather.weather[0].main === "Clouds" && (
            <img className="w-20" src="/public/icons/cloudy.svg" />
          )}
          {weather.weather[0].main === "Rain" && (
            <img className="w-20" src="/public/icons/rainy.svg" />
          )}
          {weather.weather[0].main === "Thunderstorms" && (
            <img className="w-20" src="/public/icons/stormy.svg" />
          )}
          {weather.weather[0].main === "Snow" && (
            <img className="w-20" src="/public/icons/snowy.svg" />
          )}
          {weather.weather[0].main === "Haze" && (
            <img className="w-20" src="/public/icons/hazy.svg" />
          )}
          <h3 className="text-xl text-slate-950">
            {`Temp: ${weather.main.temp.toFixed(0)}° F`}
          </h3>
          <h3 className="text-xl text-slate-950">
            {`Feels: ${weather.main.feels_like.toFixed(0)}° F`}
          </h3>
          <h3 className="text-xl text-slate-950">
            {`Humidity: ${weather.main.humidity}%`}
          </h3>
          <h3 className="text-xl text-slate-950">
            {`Wind: ${weather.wind.speed} mph`}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Current;
