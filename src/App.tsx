import { useState } from "react";
import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import PageFooter from "./components/PageFooter";
import Modal from "./components/Modal";

const App = () => {
  // state management
  const [inputs, setInputs] = useState({
    country: "USA",
    state: "Alabama",
    city: "",
  });

  const [showOutput, setShowOutput] = useState(false);

  const [newLocation, setNewLocation] = useState({});

  const [weather, setWeather] = useState([] as string[]);

  const [forecast, setForecast] = useState([] as string[]);

  const [error, setError] = useState(false);

  // handlers
  const handleInputsChange = (event: any) => {
    setInputs((lastInputs) => {
      return {
        ...lastInputs,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSearchButton = (event: any) => {
    event.preventDefault();
    getData(inputs);
  };

  // fetch api

  const getData = async (data: any) => {
    const req = `https://www.api-of-all-trades.net/weather?city=${data.city}&state=${data.state}&country=${data.country}`;
    const res = await fetch(req);
    const geoData = await res.json();

    if (res.status === 200) {
      if (geoData[0] === "") {
        setShowOutput(false);
        setError(true);
      } else if (geoData[0].country === "USA") {
        let currentLocation = {
          country: geoData[0].country,
          state: geoData[0].state,
          city: geoData[0].city,
          //id: crypto.randomUUID().toString(),
        };
        setNewLocation(currentLocation);
        setWeather(geoData[1]);
        setForecast(geoData[2]);
        setShowOutput(true);
      } else if (geoData[0].country !== "USA") {
        let currentLocation = {
          country: geoData[0].country,
          state: null,
          city: geoData[0].city,
          //id: crypto.randomUUID().toString(),
        };
        setNewLocation(currentLocation);
        setWeather(geoData[1]);
        setForecast(geoData[2]);
        setShowOutput(true);
      }
    } else {
      setShowOutput(false);
      setError(true);
    }
  };

  // jsx
  return (
    <div className="body-container relative">
      <PageHeader
        showOutput={showOutput}
        newLocation={newLocation}
        error={error}
      />
      <PageMain
        showOutput={showOutput}
        inputs={inputs}
        newLocation={newLocation}
        handleInputsChange={handleInputsChange}
        handleSearchButton={handleSearchButton}
        weather={weather}
        forecast={forecast}
        error={error}
      />
      <PageFooter error={error} />
      {error && <Modal setError={setError} />}
    </div>
  );
};

export default App;
