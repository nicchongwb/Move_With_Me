import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card, Button, Modal, Select, Input } from "antd";
import { CarFilled } from "@ant-design/icons";
import "../../../assets/css/button.css";

import "./GameMap.css";

const verticalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const horizontalAxis = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const CreateMap = (props) => {
  let history = useHistory();

  // Button States
  const { Option } = Select;
  const [difficulty, setDifficulty] = useState("Easy");
  const [challengeName, setChName] = useState("");

  let board = []; // for render
  const [hover, setHover] = useState();
  const [cmd, setCmd] = useState([]); // to keep track of set state
  const [selTile, setSelTile] = useState([]); // to keep track of any selected tiles | use for coloring and also passing to flask

  const [isSubmitted, setIsSubmitted] = useState(false); // UseEffect when True to rerender page afresh or Modal->redirect...

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    history.push("/home");
  };

  // Function to handle form submission to FLASK
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalVisible(true);

    // Package json payload from states, don't need to JSONStringify as Axios will serialize for us
    const payload = {
      name: challengeName,
      difficulty: difficulty,
      selTile: selTile,
    };

    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:5000",
    };

    // AXIOS to send a post req to api endpoint in FLASK
    // response.data.<key>
    return axios
      .post("/api/createChallenge", payload, headers)
      .then(function (response) {
        console.log(response.data);
        setIsSubmitted(response.data.isSubmitted);
      });
  };

  // Difficulty Dropdown Event handler
  function handleChange(value) {
    console.log(`selected ${value}`);
    setDifficulty((prevDifficulty) => value);
  }

  // Challenge Name Input Event Handler
  function handleInput(value) {
    console.log(`Inputed ${value}`);
    setChName((prevChName) => value);
  }

  // Event Handlers
  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  const handleClick = (e) => {
    //console.log(e.target.getAttribute("id"));
    let eid = e.target.getAttribute("id");
    console.log(eid);
    console.log(idToArr(eid)); // check if id is converted to array
    //console.log(JSON.stringify(array));

    // Check if e [x,y] exist in selTile
    if (isArrayInArray(selTile, idToArr(eid))) {
      console.log("[" + JSON.stringify(idToArr(eid)) + "]" + "already exist");
      // Remore the selTile to the setTile array
      const newArr = [...selTile]; // Set up new array
      var index = getIndexOf(selTile, idToArr(eid));
      newArr.splice(index, 1); // Remove element at index n
      setSelTile(newArr); // Update SelTile state with new array after removing

      // Modify DOM by Getting e's background color and set it to white
      let ebgcolor = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("background-color");
      document.getElementById(eid).style.backgroundColor = "white";
    } else {
      console.log("Element does not exist");
      // add the selTile to the setTile array
      setSelTile((selTile) => [...selTile, idToArr(eid)]);
      // Modify DOM by Getting e's background color and set it to green
      let ebgcolor = window
        .getComputedStyle(e.target, null)
        .getPropertyValue("background-color");
      document.getElementById(eid).style.backgroundColor = "#4CAF50";
    }
  };

  // Function to convert HTML id x0y1 to [0,1]
  function idToArr(id) {
    var id = id.replace(/\D/g, "");
    var arr = Array.from(id, Number);
    return arr;
  }

  // Check if array in array
  function isArrayInArray(arr, item) {
    var item_as_string = JSON.stringify(item);
    var contains = arr.some(function (e) {
      return JSON.stringify(e) === item_as_string;
    });
    return contains;
  }

  // Get Index of item found in array
  function getIndexOf(arr, item) {
    var itemStr = JSON.stringify(item);
    var index = arr.findIndex(
      (element) => JSON.stringify(element) === JSON.stringify(item)
    );
    //console.log("Index found at " + index);
    return index;
  }

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      board.push(
        <button
          key={"x" + i + "y" + j}
          id={"x" + i + "y" + j}
          className="tile button button1"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          [{horizontalAxis[i]},{verticalAxis[j]}]
        </button>
      );
    }
  }

  return (
    <div class="flex justify-center">
      <Card title="Create Map" style={{ width: 1000, height: 750 }}>
        <div id="board" class="  m-auto ">
          {board}
          {selTile}
        </div>
      </Card>

      <Card title="Challenge Information">
        <div class="mt-12 ">
          <div class="   mb-12 ">
            <p class="mr-4 float-left"> Difficulty Level:</p>
            <Select
              defaultValue=""
              style={{ width: 300 }}
              onChange={handleChange}
              placeholder="Select  difficulty level"
              name="difficulty"
              rules={[
                {
                  required: true,
                  message: "Please select a diffiuclty level",
                },
              ]}
            >
              <Option value="Easy">Easy</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Hard">Hard</Option>
            </Select>
          </div>
          <div>
            <div class="   mb-12 ">
              <p class="mr-2 float-left"> Challenge Name:</p>
              <Input
                placeholder="Enter challenge name"
                style={{ width: 300 }}
                name="difficulty"
                rules={[
                  {
                    required: true,
                    message: "Please select a diffiuclty level",
                  },
                ]}
                onChange={(e) => handleInput(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Modal
          title="Woohoo!"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Create another challenge"
          cancelText="Back"
          style={{ top: 250, textAlign: "center" }}
        >
          <div class="text-center">
            <CarFilled style={{ fontSize: 100 }} />
            <h2 class="text-gray-700 font-semibold text-xl mt-6">
              Your challenge has been successfully created!
            </h2>
            <div class="text-lg mt-8">
              <span class=" font-semibold"> Difficulty Level: </span>
              <span class="font-normal"> {difficulty}</span>
            </div>
            <div class="text-lg">
              <span class=" font-semibold"> Challenge Name: </span>
              <span class="font-normal"> {challengeName}</span>
            </div>
          </div>
        </Modal>
        {/* <div>
          <h2 class=" text-lg font-bold mt-12">Challenge Information</h2>
          <div>
            <span> Difficulty Level: </span> {difficulty}
          </div>
          <div>
            <span> Challenge Name:</span> {challengeName}
          </div>
          <div>
            <span> You have selected the following tiles:</span>
            {JSON.stringify(selTile)}
          </div>
          <div>{"Submitted/Stored to/in MONGO: " + isSubmitted}</div>
        </div>
        */}
        <div class="mt-12 text-center">
          <Button type="primary" onClick={handleSubmit}>
            Create Game
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateMap;