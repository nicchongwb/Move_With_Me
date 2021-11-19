import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Challenge from "./components/Challenges/Challenge";
import ChallengeResult from "./components/Challenges/ChallengeResult";
import SelectChallenge from "./components/Challenges/SelectChallenge";
import StartGame from "./components/Home/StartGame";
import SetPlayerName from "./components/Home/SetPlayerName";
import CarSpecs from "./components/Home/CarSpecs";

function App() {
  return (
    <div>
      <Route
        exact
        key="challenge"
        path="/challenge"
        exact
        component={Challenge}
      ></Route>
      <Route
        exact
        key="challengeResult"
        path="/challengeResult"
        exact
        component={ChallengeResult}
      ></Route>
      <Route
        exact
        key="selectChallenge"
        path="/selectChallenge"
        exact
        component={SelectChallenge}
      ></Route>
      <Route
        exact
        key="startGame"
        path="/startGame"
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
        key="carSpecs"
        path="/carSpecs"
        exact
        component={CarSpecs}
      ></Route>
    </div>
  );
}

export default App
