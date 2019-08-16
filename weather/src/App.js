import React from "react";
import Week from "./components/Week.js";
import "./App.css";

/* london weather https://www.metaweather.com/api/location/44418/ */
function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Week />
    </div>
  );
}

export default App;
