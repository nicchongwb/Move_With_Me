import React, { useState, useEffect } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Card, Button, Table } from "antd";
import axios from 'axios';
import "../../assets/css/ranking.css"

const ChallengeResult = (props) => {
  // const rankID = props.location.state.rankingID;
  const rankID = 2;
  const [recordArr, setRecordArr] = useState([]); // State to store our record after fetching

  // Event Handler for Sending commands to FLASK API - POST request to /api/challengeRanking
  const fetchRanking = () => {
    // Package json payload from states, don't need to JSONStringify as Axios will serialize for us
    const payload = {
      rankID: rankID,
    };

    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:5000",
    };

    // AXIOS to send a post req to api endpoint in FLASK - response.data.<key>
    return axios.post('/api/challengeResult', payload, headers)
    .then(function(response){
        console.log(response.data.rankingData)
        setRecordArr(response.data.rankingData)  
    });
  };

  // EffectHook to fetchRanking upon first render
  useEffect(() => {
    console.log("fetching rankings...")
    fetchRanking()
  }, [])

  // Debug function, comment out
  useEffect(() =>{
    console.log("Ranking fetched is " + JSON.stringify(recordArr))
  },[recordArr])

  const columns = [
    {
      id: 'Ranking ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Player Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Challenge Name',
      dataIndex: 'challengeName',
      key: 'challengeName'
    },
    {
      title: 'Score',
      dataIndex: 'score',
      key: 'score',
    },
  ];

  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="pt-72 text-center">
        <h1 class="font-semibold text-8xl text-gray-800">Ranking</h1>
        <div class="w-4/6 m-auto pt-24">
          <Table 
            dataSource={recordArr} 
            columns={columns.filter(element => element.dataIndex !== "id")} 
            rowClassName={(record, index) => (record.id == rankID ? "green":"black")}
          />;
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
export default ChallengeResult;