import React, { useState, useEffect } from "react";
import "../../assets/css/startGame.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  BoxPlotFilled,
} from "@ant-design/icons";
import { Card, Button } from "antd";
import Element from "antd/lib/skeleton/Element";

const Challenge = (props) => {
  // const data = props.location.state?.challengeInfo;
  // console.log("data", data);
  const [elementData, setElementData] = useState([]);
  const [dragId, setDragId] = useState("");
  const [newElementData, setNewElementData] = useState([]);

  const dragHandler = (e, type) => {
    e.dataTransfer.setData("type", type);
    console.log("this is type", type);
    setDragId(type);
    console.log("currentTarget", dragId);
  };

  const dragOver = (e) => {
    e.preventDefault();
    // const elementId = e.target.value;
    // console.log("this is elementid", elementId);
  };

  //datatransfer help to hold data that is being dragged during drag and drop
  const drop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type");
    console.log("type", type);
    setElementData((elementData) => [...elementData, type]);
    console.log("test", elementData);

    const newBoxState = elementData.map((element) => {
      //previous arrow
      console.log("element", element);
      console.log(dragId);
      //new element being dragged currently
      console.log("elementData State", elementData);
      if (element == dragId) {
        //swap elements
        let temp = elementData[dragId];
        elementData[dragId] = elementData[element];
        elementData[element] = temp;
        console.log("temp", temp);
      }
    });
    setNewElementData(newBoxState);
  };

  const remove = (e) => {
    // console.log("remove function");
    // const elementId = e.dataTransfer.getData("elementId");
    // console.log(elementId);
  };

  const renderElements = () => {
    var elements = [];
    //my elements
    console.log(elementData);

    elementData.forEach((element) => {
      if (element == "up") {
        elements.push(
          <ArrowUpOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "up", true)}
            id="up"
          />
        );
      } else if (element == "down") {
        elements.push(
          <ArrowDownOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "down", true)}
            id="down"
          />
        );
      } else if (element == "left") {
        elements.push(
          <ArrowLeftOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "left", true)}
            id="left"
          />
        );
      } else if (element == "right") {
        elements.push(
          <ArrowRightOutlined
            style={{ fontSize: "40px" }}
            draggable={true}
            onDragStart={(e) => dragHandler(e, "right", true)}
            id="down"
          />
        );
      }
    });
    return <div>{elements}</div>;
  };

  return (
    <div class=" background w-full min-h-screen opacity-80 text-center  ">
      <div class="pt-20 text-center">
        <h1 className="text-5xl text-blue-800 mt-12 text-center font-bold  ">
          Move With Me
        </h1>
      </div>
      <div class="float-right text-right mr-8">
        <p class="text-xl">Hello </p>
        <p class=" text-green-700"> Connection Status</p>
      </div>
      <div class="pt-48">
        <div class="flex justify-center">
          <Card title="Map" style={{ width: 500 }}></Card>

          <Card title="Controls" style={{ width: 500 }}>
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
              onDrop={(e) => drop(e)}
            >
              <p class="text-xl pt-8">Drop Area</p>
              Hello, drop your arrows here!
              {renderElements()}
            </div>
          </Card>
        </div>
      </div>

      <div class="mt-12">
        <Button type="primary">I am Done!</Button>
      </div>
    </div>
  );
};;;
export default Challenge;
