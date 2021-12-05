import React, { useState } from "react";
import "../../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../../../assets/css/button.css";
import GameMap from "../../GameManagement/Map/CreateMap";
const StartGame = () => {
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-24 text-center">
        <h1 class="font-semibold text-6xl text-gray-800">Move with Me</h1>
        <h3 class="font-medium text-2xl  text-gray-800  p-8 ">
          Create new game
        </h3>
        <GameMap> </GameMap>
      </div>
    </div>
  );
};
export default StartGame;
