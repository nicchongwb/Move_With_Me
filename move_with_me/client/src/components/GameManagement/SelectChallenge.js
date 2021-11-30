import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import "../../assets/css/startGame.css";
import { challenges } from "../../api";

const SelectChallenge = () => {
  const history = useHistory();

  const [challengesNo, setChallengesNo] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState([]);

  //backend api
  const retrieveChallenges = async () => {
    const res1 = await challenges();
    //this is the data
    const data = res1.data;
    setChallengesNo(data);
    console.log(data);
  };
  console.log("challengesNo state", challengesNo);

  const retrieveSelectedChallenge = (e, challengesNo) => {
    e.preventDefault();

    history.push({
      pathname: "/challenge",
      state: {
        challengeInfo: challengesNo,
      },
    });

    console.log(" state", challengesNo);
  };

  useEffect(() => {
    retrieveChallenges();
  }, []);

  return (
    <div class="   background w-full min-h-screen opacity-80 ">
      <h2 class="text-4xl  font-semibold  pt-24 text-center">
        Select Your Challenge
      </h2>
      <div class=" flex justify-evenly">
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