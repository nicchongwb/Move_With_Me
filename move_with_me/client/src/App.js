import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartGame from "./components/GameManagement/StartGame";
import SetPlayerName from "./components/GameManagement/SetPlayerName";
import DoTutorial from "./components/GameManagement/DoTutorial";
import SelectChallenge from "./components/GameManagement/SelectChallenge";
import Map from "./components/GameManagement/Map";
import Challenge from "./components/GameManagement/Challenge";
import CarSpecs from "./components/GameManagement/CarSpecs";
import Ranking from "./components/GameManagement/Ranking";
import CreateMap from "./components/GameManagement/Map/CreateMap";
import Admin from "./components/GameManagement/Admin/Admin";
import AdminHome from "./components/GameManagement/Admin/AdminHome";
import Home from "./components/GameManagement/Home";
import admLogin from "./components/AccountManagement/admLogin";
import ProtectedRoute from "./components/AccountManagement/ProtectedRoute";
import loginLand from "./components/AccountManagement/loginland";

import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import ChallengeResult from "./components/GameManagement/ChallengeResult";

function App() {
  return (
    <div>
      <Router>
        <Route
          exact
          key="startGame"
          path="/start"
          exact
          component={StartGame}
        ></Route>
        <Route
          exact
          key="carSpecs"
          path="/carSpecifications"
          exact
          component={CarSpecs}
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
          key="setPlayerName"
          path="/setPlayerName"
          exact
          component={SetPlayerName}
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
        <Route
          exact
          key="ranking"
          path="/ranking"
          exact
          component={Ranking}
        ></Route>
        <Route exact key="challengeResult" path="/challengeResult" exact component={ChallengeResult}></Route>
        <Route exact key="createMap" path="/createMap" exact component={CreateMap}></Route>
        <Route
          exact
          key="createMap"
          path="/createMap"
          exact
          component={CreateMap}
        ></Route>
        <Route exact key="admin" path="/admin" exact component={Admin}></Route>
        <Route
          exact
          key="adminHome"
          path="/adminHome"
          exact
          component={AdminHome}
        ></Route>

        <Route exact key="home" path="/" exact component={Home}></Route>
        <Route
          exact
          key="admlogin"
          path="/admlogin"
          exact
          component={admLogin}
        ></Route>
        <Route
          exact
          key="loginland"
          path="/loginland"
          exact
          component={loginLand}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
