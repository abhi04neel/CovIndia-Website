import React, { useState } from "react";
import "./App.css";

function App() {
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
  };

  function getPosition(position) {
    setLocationState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    console.log(position.coords.latitude, position.coords.longitude);
  }

  const [locationState, setLocationState] = useState();
  return (
    <div className="App">
      <header className="App-header">
        {locationState && (
          <p>
            {`Your latitude is ${locationState.latitude}, longitude is ${locationState.longitude}`}
          </p>
        )}
        <button className="help-button" onClick={getLocation}>
          Help !
        </button>
      </header>
    </div>
  );
}

export default App;
