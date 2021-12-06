import React, { useEffect, useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button, Table } from "antd";
import axios from "axios";

const Ranking = () => {
  const [recordArr, setRecordArr] = useState([]); // State to store our ranking from mongo -> flask -> react

  const fetchRanking = () => {
    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:5000",
    }

    // AXIOS to send GET request to /api/rankings
    return axios.post('/api/rankings', headers)
    .then(function(response){
      setRecordArr(response.data.rankingData)
      console.log(response.data.rankingData)      
    });
  };

  // EffectHook to fetchRanking upon first render
  useEffect(() => {
    console.log("fetching rankings...")
    fetchRanking()
  },[])

  const columns = [
    {
      title: "Player Name",
      dataIndex: "playerName",
      key: "playerName",
    },
    {
      title: "Total Score",
      dataIndex: "score",
      key: "score",
    },
  ];
  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-gray-800">Ranking</h1>
        <div class="w-4/6 m-auto pt-24">
          <Table dataSource={recordArr} columns={columns} />
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
