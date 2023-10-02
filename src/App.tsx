import { useState } from "react";
import PageHeader from "./components/PageHeader";
import PageMain from "./components/PageMain";
import PageFooter from "./components/PageFooter";

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
    getGeoData(inputs);
  };

  // fetch api
  const endpoint = "https://api.openweathermap.org";
  const key = "fd03838b9b2723c3ea2712dc8e4df0e6";

  const getGeoData = async (data: any) => {
    if (data.country !== "USA") {
      const req = `${endpoint}/geo/1.0/direct?q=${data.city},${data.country}&appid=${key}`;
      const res = await fetch(req);
      const geoData = await res.json();

      let currentLocation = {
        country: data.country,
        state: null,
        city: geoData[0].name,
        id: crypto.randomUUID().toString(),
      };

      setNewLocation(currentLocation);
      getCurrentWeather(geoData[0]);
      getForecast(geoData[0]);
    } else if (data.country === "USA") {
      const req = `${endpoint}/geo/1.0/direct?q=${data.city},${data.state},${data.country}&appid=${key}`;
      const res = await fetch(req);
      const geoData = await res.json();

      let currentLocation = {
        country: data.country,
        state: data.state,
        city: geoData[0].name,
        id: crypto.randomUUID().toString(),
      };

      setNewLocation(currentLocation);
      getCurrentWeather(geoData[0]);
      getForecast(geoData[0]);
    } else {
      console.log("Error");
    }
  };

  const getCurrentWeather = async (geoData: any) => {
    const latitude = geoData.lat;
    const longitude = geoData.lon;

    const req = `${endpoint}/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;
    const res = await fetch(req);
    const currentData = await res.json();
    setWeather(currentData);
    console.log(weather);
  };

  const getForecast = async (geoData: any) => {
    const latitude = geoData.lat;
    const longitude = geoData.lon;

    const req = `${endpoint}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;
    const res = await fetch(req);
    const forecastData = await res.json();
    setForecast(forecastData);
    console.log(forecast);
    setShowOutput(true);
  };
  // jsx
  return (
    <div className="body-container">
      <PageHeader showOutput={showOutput} newLocation={newLocation} />
      <PageMain
        showOutput={showOutput}
        inputs={inputs}
        newLocation={newLocation}
        handleInputsChange={handleInputsChange}
        handleSearchButton={handleSearchButton}
        weather={weather}
        forecast={forecast}
      />
      <PageFooter />
    </div>
  );
};

export default App;
