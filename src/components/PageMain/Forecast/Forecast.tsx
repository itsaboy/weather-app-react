import ForecastDayOne from "./ForecastDayOne";
import ForecastDayTwo from "./ForecastDayTwo";
import ForecastDayThree from "./ForecastDayThree";
import ForecastDayFour from "./ForecastDayFour";
import ForecastDayFive from "./ForecastDayFive";

const Forecast = ({ forecast, weather }: any) => {
  return (
    <section
      id="forecast-section"
      className="bg-gradient-to-b from-sky-600 to-sky-800 w-full border-2 border-sky-950 rounded-2xl shadow-sky-900 shadow-lg transition ease-in-out delay-150 hover:shadow-sky-900 hover:shadow-2xl hover:translate-y-1"
    >
      <div className="forecast-container">
        <h2 className="bg-gradient-to-b from-sky-950 to-sky-900 text-4xl text-slate-200 pt-4 h-full w-full border-b-2 rounded-t-xl border-sky-950 text-center">
          Forecast
        </h2>
        <div className="forecast-data-container text-slate-950">
          <ForecastDayOne forecast={forecast} weather={weather} />
          <ForecastDayTwo forecast={forecast} weather={weather} />
          <ForecastDayThree forecast={forecast} weather={weather} />
          <ForecastDayFour forecast={forecast} weather={weather} />
          <ForecastDayFive forecast={forecast} weather={weather} />
        </div>
      </div>
    </section>
  );
};

export default Forecast;
