import React, { useState, useEffect } from "react";
import "../../assets/css/startGame.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card, Button, Modal } from "antd";
import { saveCommands } from "../../api";
import "../../assets/css/button.css";
import axios from 'axios';
import GameMap from "./Map/GameMap";

const Challenge = (props) => {
  const data = props.location.state?.challengeInfo;
  console.log("data", data);
  const name = props.location.state?.name;
  console.log("name", name);
  const [elementData, setElementData] = useState([]);
  const [dragId, setDragId] = useState("");

  // Game states
  const [position, setPosition] = useState({ x: 0, y: 0})
  const x = position.x;
  const y = position.y;
  const [score, setScore] = useState(0); // State for score
  const [challenge, setChallenge] = useState(1); // State for Challenge to replace with props.challengeInfo
  const [chStatus, setChStatus] = useState('Running'); // State for challenge status
  const [isComplete, setIsComplete] = useState(false); // State for end game summary modal
  const [isModalClose, setIsModalClose] = useState(false); // State for modalClose

  // Game Functions
  function updateCarPos(newX, newY){
    setPosition(prevPosition => {
      return { x: newX, y: newY }
    })
  }

  // Function to handle form submission to FLASK
  const handleSubmit = (e) => {
    e.preventDefault();
    // Package json payload from states, don't need to JSONStringify as Axios will serialize for us
    const payload = {
        "commands":elementData,
        "score":score,
        "challengeID":challenge,
        "position":position,
        "chStatus":chStatus
    };

    const headers = {
      'Access-Control-Allow-Origin':'http://localhost:5000'
    }

    // AXIOS to send a post req to api endpoint in FLASK
    // response.data.<key>
    return axios.post('/api/move', payload, headers)
    .then(function(response){
        console.log(response.data)
        setScore(response.data.score)
        updateCarPos(response.data.position['x'], response.data.position['y'])
        setChStatus(prevChStatus => response.data.chStatus)      
    });
  }

  // Modal function when OK/Confirm is clicked
  const handleOk = () => {
    setIsComplete(false);
    setIsModalClose(true);
  }

  // Effect Hook to keep a look out when challenge is completed and then pop out modal
  useEffect(() => {
    if (chStatus == 'Completed'){
      console.log('Challenge Status is changed to ' + chStatus);
      setIsComplete(true);
    }    
  }, [chStatus])

  // Effect Hook when Modal is close and to redirect user to next page
  useEffect(() => {
    console.log("Modal Closed...redirecting to...")
  }, [isModalClose])

  // UI Functions
  const commands = async () => {
    const res1 = await saveCommands(elementData);
    console.log(res1);

    if (res1.status == 200) {
      console.log("status 200");
    }
    console.log("res1", res1);
  };

  const dragHandler = (e, type, index = -1) => {
    e.dataTransfer.setData("type", type);
    console.log("this is type", type);
    //new arrow dragged into control
    if (index === -1) {
      setDragId(type);
    }
    //arrow dragged within control
    else {
      setDragId(index);
    }
    console.log("currentTarget", dragId);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  const drop = (e, dropType, i = -1) => {
    if (e && e.stopPropagation) e.stopPropagation();
    console.log(dropType);
    if (dropType == "newDrop") {
      const type = e.dataTransfer.getData("type");
      setElementData((elementData) => [...elementData, type]);
    } else {
      const type = e.dataTransfer.getData("type");
      if (i !== -1) {
        //only able to splice backwards
        console.log("splicing");
        console.log(dragId);
        if (typeof dragId === "string") {
          console.log("dragid inside if else", dragId);
          console.log(i);
          // if (i === -1) {
          //   console.log('test')
          elementData.splice(i, 0, type);
          console.log(elementData);
          setElementData((elementData) => [...elementData]);
          // }
          // else {

          // }
        } else {
          console.log("elementdata i", elementData[i]);
          console.log("dragId", elementData[dragId]);
          console.log(
            "dragId",
            elementData.splice(elementData[i], 0, elementData[dragId])
          );
          elementData.pop(elementData[i]);
          setElementData((elementData) => [...elementData]);
          console.log("after removal", elementData);
        }
      }
    }
  };
  const dropOutside = (e, dropType) => {
    console.log(e);

    if (dropType == "delete") {
      console.log("test");
      //array to delete arrow from
      console.log(elementData);
      console.log("delete drag", dragId);
      elementData.pop(elementData[dragId]);
      console.log(elementData);
      setElementData((elementData) => [...elementData]);
      console.log(elementData);
    }
  };

  const renderElements = () => {
    var elements = [];
    console.log(elementData);
    elementData.forEach((element, index) => {
      if (element == "up") {
        elements.push(
          <ArrowUpOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "up", index)}
            onDrop={(e) => drop(e, "insertDrop", index)}
          />
        );
      } else if (element == "down") {
        elements.push(
          <ArrowDownOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "down", index)}
            onDrop={(e) => drop(e, "insertDrop", index)}
          />
        );
      } else if (element == "left") {
        elements.push(
          <ArrowLeftOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "left", index)}
            onDrop={(e) => drop(e, "insertDrop", index)}
          />
        );
      } else if (element == "right") {
        elements.push(
          <ArrowRightOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "right", index)}
            onDrop={(e) => drop(e, "insertDrop", index)}
          />
        );
      }
    });
    return <div>{elements}</div>;
  };

  return (
    <div class=" background w-full min-h-screen opacity-80 text-center  ">
      <div class="pt-20 text-center">
        <h1 className="text-6xl text-gray-800  mt-12 text-center font-bold  ">
          Move With Me
        </h1>
      </div>
      <div class="float-right text-right mr-8">
        <p class="text-xl">Hello {name} </p>
        <p class=" text-green-700"> Connection Status</p>
      </div>
      <div class="float-left text-left ml-8">
        <p class="text-xl">Score: {score}</p>
        <p class=" text-green-700"> Challenge Status: {chStatus}</p>
      </div>
      <div class="pt-48">
        <div class="flex justify-center">
          <Card title="Game Map" style={{ width: 600 }}>
            <div className="components-list" class="flex justify-center">
              <div>
                <GameMap x={position.x} y={position.y} challenge={challenge} />
              </div>
            </div>
          </Card>

          <Card title="Controls" style={{ width: 600 }}>
            <div className="components-list" class="flex justify-center">
              <div>
                <ArrowLeftOutlined
                  style={{ fontSize: "40px" }}
                  draggable={true}
                  onDragStart={(e) => dragHandler(e, "left")}
                />
              </div>
              <div>
                <ArrowRightOutlined
                  style={{ fontSize: "40px" }}
                  draggable={true}
                  onDragStart={(e) => dragHandler(e, "right")}
                />
              </div>
              <div>
                <ArrowUpOutlined
                  style={{ fontSize: "40px" }}
                  draggable={true}
                  onDragStart={(e) => dragHandler(e, "up")}
                />
              </div>
              <div>
                <ArrowDownOutlined
                  style={{ fontSize: "40px" }}
                  draggable={true}
                  onDragStart={(e) => dragHandler(e, "down")}
                />
              </div>
            </div>
          </Card>
        </div>

        <div class="flex justify-center">
          <Card title="Command Tray" style={{ width: 1000 }}>
            <div
              class=" h-72 bg-gray-200"
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => drop(e, "newDrop")}
            >
              <p class="text-xl pt-8">Drop Area</p>
              Hello, drop your arrows here!
              {renderElements()}
            </div>
          </Card>
          <Card title="Delete Tray" style={{ width: 200 }}>
            <div
              class=" h-72 bg-gray-200"
              onDragOver={(e) => dragOver(e)}
              onDrop={(e) => dropOutside(e, "delete")}
            >
              <p class="text-xl pt-8">Delete Area</p>
            </div>
          </Card>
        </div>
      </div>

      <div class="mt-12">
        <Button type="primary" onClick={handleSubmit}>
          I am Done!
        </Button>
      </div>

      <div class="mt-12">
        <Modal
          title={"Congratulations " + name + "!!"}
          visible={isComplete}
          onOk={handleOk}
          okText="Confirm"
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <p class="text-xl pt-8">Your Score is : {score}</p>
        </Modal>
      </div>
      {console.log(chStatus)}
    </div>
  );
};;;
export default Challenge;
