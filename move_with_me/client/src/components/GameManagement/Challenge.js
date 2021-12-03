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
import { saveCommands } from "../../api";
import Element from "antd/lib/skeleton/Element";

const Challenge = (props) => {
  const data = props.location.state?.challengeInfo;
  console.log("data", data);
  const [elementData, setElementData] = useState([]);
  const [dragId, setDragId] = useState("");

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
    //current arrow being dragged
    if (index === -1) {
      setDragId(type);
    } else {
      setDragId(index);
    }

    console.log("currentTarget", dragId);
  };

  const dragOver = (e) => {
    e.preventDefault();
    // const elementId = e.target.value;
    // console.log("this is elementid", elementId);
  };

  //datatransfer help to hold data that is being dragged during drag and drop
  const drop = (e, dropType, i = -1) => {
    // console.log(dragId);
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
          //where u want to drop
          console.log("elementdata i", elementData[i]);
          console.log("dragId", elementData[dragId]);
          console.log(
            "dragId",
            elementData.splice(elementData[i], 0, elementData[dragId])
          );
          elementData.pop(elementData[i]);

          //remove element[i]

          setElementData((elementData) => [...elementData]);

          console.log("after removal", elementData);
        }
      }
    }
  };

  const renderElements = () => {
    var elements = [];
    //my elements
    console.log(elementData);
    let id;

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
              onDrop={(e) => drop(e, "newDrop")}
            >
              <p class="text-xl pt-8">Drop Area</p>
              Hello, drop your arrows here!
              {renderElements()}
            </div>
          </Card>
        </div>
      </div>

      <div class="mt-12">
        <Button type="primary" onClick={commands}>
          I am Done!
        </Button>
      </div>
    </div>
  );
};;;
export default Challenge;
