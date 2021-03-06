import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import "../../assets/css/button.css";

const DoTutorial = () => {
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-gray-800">Tutorial</h1>

        <div class="flex justify-evenly pt-24">
          <Card title="1 - Game Map" style={{ width: 300 }}>
            <p class="text-gray-800">Follow game map route to obtain points</p>
          </Card>
          <Card title="2 - Controls" style={{ width: 300 }}>
            <p class="text-gray-800 text-base">
              Try out the controls to manoeuvre your car
            </p>
          </Card>
          <Card title="3 - Drop Commands Tray" style={{ width: 300 }}>
            <p class="text-gray-800 text-base">
              Drop your commands to finish your route
            </p>
          </Card>

          <Card title="4 - Delete Commands Tray" style={{ width: 300 }}>
            <p class="text-gray-800 text-base">
              Delete commands if you want to try a different command
            </p>
          </Card>
        </div>

        <div class="pt-12 ">
          <Link to="/start">
            <div class="mt-12">
              <Button type="secondary">Back</Button>
            </div>
          </Link>
          <Link to="/setPlayerName">
            <div class="mt-12">
              <Button type="primary">I am Ready</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default DoTutorial;
