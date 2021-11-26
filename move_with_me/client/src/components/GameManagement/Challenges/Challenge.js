import React, { useState, useRef } from "react";

import "../../../assets/css/startGame.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card } from "antd";

const Challenge = (props) => {
  const pname = props.location.state?.playerName;
  console.log("playerName", pname);
  //dragging item
  const draggingItem = useRef();
  //switch arrow position
  const dragOverItem = useRef();
  //list of arrows stored in state
  const [list, setList] = useState([
    <ArrowUpOutlined />,
    <ArrowDownOutlined />,
    <ArrowLeftOutlined />,
    <ArrowDownOutlined />,
  ]);

  const handleDragStart = (e, position) => {
    //find current position of item
    draggingItem.current = position;
  };
  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };
  const handleDragEnd = (e) => {
    const listCopy = [...list];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = null;
    dragOverItem.current = null;
    //set the new position of arrows
    setList(listCopy);
  };

  const grids = [0, 1, 2, 4, 5];

  return (
    <div class=" background w-full min-h-screen opacity-80 text-center ">
      <div class="pt-20 text-center">
        <h1 className="text-5xl text-blue-800 mt-12 text-center font-bold  ">
          Move With Me
        </h1>
      </div>
      <div class="float-right text-right mr-8">
        <p class="text-xl">Hello {pname}! </p>
        <p class=" text-green-700"> Connection Status</p>
      </div>
      <div class="flex mt-20 justify-center">
        <Card title="Navigate Map" style={{ width: 500 }}>
          <div class="flex">
            {grids.map(() => (
              <div class="w-24 h-24 bg-gray-300 border-black  border-4"></div>
            ))}
          </div>
          <div class="flex">
            {grids.map(() => (
              <div class="w-24 h-24 bg-gray-300 border-black  border-4"></div>
            ))}
          </div>
        </Card>

        <Card title="Controls" style={{ width: 500 }}>
          {list &&
            list.map((item, index) => (
              <div
                onDragStart={(e) => handleDragStart(e, index)}
                onDragEnd={handleDragEnd}
                key={index}
                draggable
                class="text-5xl"
              >
                {item}
              </div>
            ))}
        </Card>
      </div>
      <div class="flex justify-center">
        <Card title="Command Tray" style={{ width: 1000 }}>
          <div></div>
        </Card>
      </div>
    </div>
  );
};
export default Challenge;
