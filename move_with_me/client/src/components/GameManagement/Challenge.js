import React, { useState, useEffect } from "react";

const Challenge = (props) => {
  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    const data = props.location.state?.challengeInfo;
    console.log("data", data);
    setChallenge(data);
  }, []);
  return <div></div>;
};
export default Challenge;