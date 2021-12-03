import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";

const DoTutorial = () => {
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-white">Move with Me</h1>
        <h2 class="font-medium text-lg  text-black pt-12  ">
          Welcome to Move with Me tutorial!
        </h2>
        <div class="flex justify-evenly pt-24">
          <Card title="1 - Game Map" style={{ width: 300 }}>
            <p class="text-gray-800">Follow game map route to obtain points</p>
          </Card>
          <Card title="2 - Controls" style={{ width: 300 }}>
            <p class="text-gray-800">
              Try out the controls to manoeuvre your car
            </p>
          </Card>
          <Card title="3 - Drop Commands Tray" style={{ width: 300 }}>
            <p class="text-gray-800">Drop your commands to finish your route</p>
          </Card>

          <Card title="4 - Delete Commands Tray" style={{ width: 300 }}>
            <p class="text-gray-800">
              Delete commands if you want to try a different command
            </p>
          </Card>
        </div>

        <div class="pt-12">
          <Link to="/setPlayerName">
            <div class="mt-12">
              <Button type="primary">Let's Go!</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DoTutorial;
