import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";

const Home = () => {
  return (
    <div class="background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-gray-800">Move With Me</h1>

        <div class="flex justify-evenly pt-24"></div>

        <div class="pt-12  flex justify-center">
          {/* <Link to="/adminHome"> */}
          <Link to="/admlogin">  
            <div class="mt-12 pr-24">
              <Button
                type="primary"
                style={{ width: 300, height: 200, fontSize: 18 }}
              >
                I am Admin
              </Button>
            </div>
          </Link>
          <Link to="/start">
            <div class="mt-12">
              <Button
                type="primary"
                style={{ width: 300, height: 200, fontSize: 18 }}
              >
                I am Player
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
