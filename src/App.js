import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Temperature from "./Pages/Temperature";
import Support from "./Pages/Support";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import SmokeSensor from "./Pages/Smoke";
import FlameSensor from "./Pages/Flame";
import LightSensor from "./Pages/Light";
import SoilMoisture from "./Pages/Soilm";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Temperature-data" component={Temperature} />
            <Route path="/Smoke-data" component={SmokeSensor} />
            <Route path="/Flame-data" component={FlameSensor} />
            <Route path="/Light-data" component={LightSensor} />
            <Route path="/Soil-data" component={SoilMoisture} />
            <Route path="/Support" component={Support} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
