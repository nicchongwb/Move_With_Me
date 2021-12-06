import React, { useState } from "react";
import "../../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import { useHistory } from "react-router";

const Home = () => {

  let history = useHistory();

  const clickHandler = () => {
    history.push('/');
    sessionStorage.clear();
    localStorage.clear();
  }

  return (
    <div class="background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-gray-800">
          How to Create Challenge?
        </h1>

        <div class="flex justify-evenly pt-24">
          <Card title="1 - Create map" style={{ width: 300 }}>
            <p class="text-gray-800 text-base">Select tiles to plot</p>
          </Card>
          <Card title="2 - Add difficulty level" style={{ width: 300 }}>
            <p class="text-gray-800 text-base">
              You can choose between Easy, Medium, Difficulty
            </p>
          </Card>
          <Card title="3 - Input challenge name" style={{ width: 300 }}>
            <p class="text-gray-800 text-base">
              Add in approriate challenge name!
            </p>
          </Card>
        </div>

        <div class="pt-12 ">
          <Link to="/">
            <div class="mt-12">
              <Button type="secondary" onClick = {clickHandler}>Log Out</Button>
            </div>
          </Link>
          <Link to="/admin">
            <div class="mt-12">
              <Button type="primary">Create Challenge</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
