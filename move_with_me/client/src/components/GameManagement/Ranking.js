import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button, Table } from "antd";

const Ranking = () => {
  const columns = [
    {
      title: "Player Name",
      dataIndex: "playerName",
      key: "playerName",
    },
    {
      title: "Challenge Name",
      dataIndex: "challenge",
      key: "challenge",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-gray-800">Ranking</h1>
        <div class="w-4/6 m-auto pt-24">
          <Table columns={columns} />
        </div>

        <div class="pt-12">
          <Link to="/start">
            <div class="mt-12">
              <Button type="secondary">Back</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Ranking;
