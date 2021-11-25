import React, { useState} from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
const StartGame = () => {
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-96 text-center">
        <h1 class="font-semibold text-8xl  text-white p-12 ">Move with Me</h1>
        <div class="pt-12">
          <Link to="/setPlayerName">
            <button class="px-16 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 ">
              Start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default StartGame;
