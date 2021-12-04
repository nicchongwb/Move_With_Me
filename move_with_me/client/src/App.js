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

import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import admLogin from "./components/AccountManagement/adminLogin";
// import admLogin from "./components/AccountManagement/testeradminLogin";
import login from "./components/AccountManagement/normalLogin";

function App() {
  {
    /* const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then(
        // Response from /members will be json
        (res) => res.json()
      )
      .then(
        // set data inside json to variable named data
        (data) => {
          setData(data);
          console.log(data);
        }
      );
  }, []); */
  }
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
        {/* <Route
          exact
          key="admlogin"
          path="/admlogin"
          exact
          component={admLogin}
        ></Route> */}
        <Route
          exact
          key="admlogin"
          path="/admlogin"
          exact
          component={admLogin}
        ></Route>
        <Route
          exact
          key="login"
          path="/login"
          exact
          component={login}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
