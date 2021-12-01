import React, { useState } from "react";
import { getElementList } from "./Challenges/utility.js";
import "../../assets/css/startGame.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card, Button } from "antd";

const Challenge = (props) => {
  // const data = props.location.state?.challengeInfo;
  // console.log("data", data);
  const [elementId, setElementId] = useState(0);
  const [elementData, setElementData] = useState({});
  const [redrag, setRedrag] = useState(false);
  const [arrow, setArrow] = useState("");
  // const [data, setData] = useState();

  const dragHandler = (e, type) => {
    // setArrow(type);
    //able to retrieve arrrow
    // console.log("this is arrow", type);
    e.dataTransfer.setData("type", type);
    console.log(type);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  //datatransfer help to hold data that is being dragged during drag and drop
  const drop = (e) => {
    e.preventDefault();
    // console.log("test");
    // console.log("this is type", arrow);

    const type = e.dataTransfer.getData("type");
    console.log("type", type);
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
              {/* {elements} */}
            </div>
          </Card>
        </div>
      </div>
      <div class="mt-12">
        <Button type="primary">I am Done!</Button>
      </div>
    </div>
  );
};
export default Challenge;
