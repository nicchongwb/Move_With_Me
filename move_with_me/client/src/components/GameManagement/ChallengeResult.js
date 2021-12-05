import React, { useState, useEffect } from "react";
import "../../assets/css/startGame.css";
import "../../assets/css/button.css";
import axios from 'axios';

const ChallengeResult = (props) => {

  return (
    <div>
      <p>TEST</p>
      <p>{"Rank ID: " + props.location.state.rankingID}</p>
    </div>
  );
};
export default ChallengeResult;