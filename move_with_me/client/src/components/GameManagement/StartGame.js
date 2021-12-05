import React, { useState} from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "../../assets/css/button.css";
const StartGame = () => {
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-96 text-center">
        <h1 class="font-semibold text-8xl  text-gray-800  p-12 ">
          Move with Me
        </h1>
        <div class="pt-12">
          <Link to="/tutorial">
            <div class="mt-12">
              <Button type="primary">Start Game</Button>
            </div>
          </Link>
          <Link to="/carspecifications">
            <div class="mt-12">
              <Button type="primary">All Specifications</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StartGame;
