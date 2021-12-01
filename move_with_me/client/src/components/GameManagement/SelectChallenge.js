import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
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
  };
  const test = (e) => {
    history.push({
      pathname: "/challenge",
      state: {
        challengeInfo: selectedChallenge,
      },
    });
  };
  console.log("challengesNo state", challengesNo);
  console.log("selected challenge state", selectedChallenge);

  useEffect(() => {
    retrieveChallenges();
  }, []);

  return (
    <div class="text-center container mx-auto px-4 space-x-32">
      <h2 class="text-4xl  font-semibold  pt-24">Select Your Challenge</h2>
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
              onClick={((e) => setSelectedChallenge(data), test)}
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
