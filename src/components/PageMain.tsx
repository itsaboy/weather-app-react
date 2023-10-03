import Search from "./PageMain/Search/Search";
import Current from "./PageMain/Current/Current";
import Forecast from "./PageMain/Forecast/Forecast";

const PageMain = ({
  showOutput,
  inputs,
  newLocation,
  handleInputsChange,
  handleSearchButton,
  weather,
  forecast,
  error
}: any) => {
  return (
    <main className="bg-gradient-to-b from-sky-100 to-sky-200 h-full hs-default-mode-active">
      <div className={`${showOutput ? "main-container" : "presearch-container"} ${error ? "opacity-50" : "opacity-100"}`}>
        <Search
          handleSearchButton={handleSearchButton}
          inputs={inputs}
          newLocation={newLocation}
          handleInputsChange={handleInputsChange}
          showOutput={showOutput}
          error={error}
        />
        {showOutput && <Current weather={weather} />}
        {showOutput && <Forecast forecast={forecast} weather={weather} />}
      </div>
    </main>
  );
};

export default PageMain;
