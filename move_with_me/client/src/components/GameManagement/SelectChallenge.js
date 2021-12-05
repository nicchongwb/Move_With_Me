import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { challenges } from "../../api";
import "../../assets/css/startGame.css";

const SelectChallenge = (props) => {
  const data = props.location.state?.playerName;
  console.log("data", data);
  const history = useHistory();

  const [challengesNo, setChallengesNo] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState([]);

  //backend api
  const retrieveChallenges = async () => {
    const res1 = await challenges();
    //this is the data
    const data = res1.data;
    setChallengesNo(data);
  };
  const retrieveSelectedChallenge = (e, challengesNo) => {
    history.push({
      pathname: "/challenge",
      state: {
        challengeInfo: challengesNo,
        name: data,
      },
    });
    console.log(" state", challengesNo);
  };
  console.log("challengesNo state", challengesNo);
  console.log("selected challenge state", selectedChallenge);

  useEffect(() => {
    retrieveChallenges();
  }, []);

  return (
    <div class="background w-full min-h-screen opacity-80 text-center ">
      <div class="pt-24 ">
        <h1 class="font-semibold text-6xl text-gray-800 pb-12">
          Select Challenge
        </h1>
      </div>
      <div class="grid grid-rows-3 grid-flow-row grid-cols-6 gap-4">
        {challengesNo.map((data, index) => (
          <div class="pt-12">
            <Button
              type="primary"
              key={index}
              style={{
                width: "10rem",
                height: "10rem",
                fontSize: "5rem",
              }}
              value={console.log(data)}
              onClick={(e) => retrieveSelectedChallenge(e, data)}
            >
              <p> {data.challengeID}</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SelectChallenge;