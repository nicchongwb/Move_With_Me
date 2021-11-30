import React, { useState } from "react";

const Challenge = (props) => {
  const data = props.location.state?.selectedChallenge;
  console.log("data", data);

  return (
    <div>
      <p>hello</p>
    </div>
  );
};
export default Challenge;
