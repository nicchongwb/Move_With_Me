import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button } from "antd";
import Car from "../../assets/images/car.png";

const CarSpecs = () => {
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-96 text-center">
        <h1 class="font-semibold text-8xl text-white">Car Specifications</h1>

        {/* <div class="w-2/6 m-auto">
          <img src={Car} alt="login image" />
        </div> */}

        <div class="pt-24">
          <div class="flex justify-evenly">
            <Card style={{ width: 300 }}>
              <p class="text-base text-gray-500 font-sans text-center">Power</p>
              <p class="text-3xl text-center pt-2 ">147 bhp</p>
            </Card>
            <Card style={{ width: 300 }}>
              <p class="text-base text-gray-500 font-sans text-center">Speed</p>
              <p class="text-3xl text-center pt-2">1.5 km/h</p>
            </Card>
            <Card style={{ width: 300 }}>
              <p class="text-base text-gray-500 font-sans text-center">
                Top Speed
              </p>
              <p class="text-3xl text-center pt-2">131 mph</p>
            </Card>
          </div>
        </div>

        <div class="pt-12">
          <Link to="/">
            <div class="mt-12">
              <Button type="secondary">Back</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CarSpecs;
