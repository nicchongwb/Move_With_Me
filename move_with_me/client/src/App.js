import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartGame from "./components/GameManagement/StartGame";
import SetPlayerName from "./components/GameManagement/SetPlayerName";
import DoTutorial from "./components/GameManagement/DoTutorial";
import SelectChallenge from "./components/GameManagement/SelectChallenge";
import Map from "./components/GameManagement/Map";
import Challenge from "./components/GameManagement/Challenge";
import Game from "./components/GameManagement/Game";
import GameMap from "./components/GameManagement/GameMap";
import CreateMap from "./components/GameManagement/CreateMap";

import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Router>
        <Route
          exact
          key="startGame"
          path="/"
          exact
          component={StartGame}
        ></Route>
        <Route
          exact
          key="setPlayerName"
          path="/setPlayerName"
          exact
          component={SetPlayerName}
        ></Route>
        <Route
          exact
          key="doTutorial"
          path="/tutorial"
          exact
          component={DoTutorial}
        ></Route>
        <Route
          exact
          key="selectChallenge"
          path="/selectChallenge"
          exact
          component={SelectChallenge}
        ></Route>
        <Route exact key="map" path="/map" exact component={Map}></Route>
        <Route
          exact
          key="challenge"
          path="/challenge"
          exact
          component={Challenge}
        ></Route>
        <Route exact key="game" path="/game" exact component={Game}></Route>
        <Route
          exact
          key="gameMap"
          path="/GameMap"
          exact
          component={GameMap}
        ></Route>
        <Route exact key="createMap" path="/CreateMap" exact component={CreateMap}></Route>
      </Router>
    </div>
  );
}

export default App;
