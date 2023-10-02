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
  forecast
}: any) => {
  return (
    <main className="bg-gradient-to-b from-sky-100 to-sky-200 h-full">
      <div className="main-container hs-default-mode-active">
        <Search
          handleSearchButton={handleSearchButton}
          inputs={inputs}
          newLocation={newLocation}
          handleInputsChange={handleInputsChange}
        />
        {showOutput && <Current weather={weather} />}
        {showOutput && <Forecast forecast={forecast} />}
      </div>
    </main>
  );
};

export default PageMain;
