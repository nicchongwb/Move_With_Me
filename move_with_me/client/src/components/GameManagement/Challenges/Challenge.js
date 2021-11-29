import React, { Component } from "react";
import { getElementList } from "./utility";
import "../../../assets/css/startGame.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card, Button } from "antd";

class Challenge extends Component {
  constructor(props) {
    super(props);
    //setting states
    this.state = {
      nextElementId: 0,
      elementData: {},
      redrag: false,
    };
  }

  //drag handler
  dragStart = (ev, type, redrag = false, elementId = null) => {
    ev.dataTransfer.setData("type", type);
    if (redrag) {
      ev.dataTransfer.setData("elementId", elementId);
    }
  };

  dragOver = (ev) => {
    ev.preventDefault();
  };

  drop = (ev) => {
    ev.preventDefault();
    const type = ev.dataTransfer.getData("type");
    //get arrow direction
    console.log(type);

    const { elementData } = this.state;
    let { nextElementId } = this.state;
    const newElementData = {
      type,
      left: ev.clientX,
      top: ev.clientY,
    };

    let elementId = ev.dataTransfer.getData("elementId");
    if (elementId) {
      // check if element is redragged and the ID exists in dataTransfer
      elementId = parseInt(elementId);
      elementData[elementId] = {
        ...elementData[elementId],
        left: ev.clientX,
        top: ev.clientY,
      };
      parseInt(ev.dataTransfer.getData("elementId"));
    } else {
      elementData[nextElementId] = newElementData;
      nextElementId = nextElementId + 1;
    }

    ev.dataTransfer.clearData();

    this.setState({
      elementData,
      nextElementId,
    });
  };

  // dropOutside = (ev) => {
  //   const { elementData } = this.state;
  //   let elementId = ev.dataTransfer.getData("elementId");
  //   if (elementId && elementData[elementId]) {
  //     delete elementData[elementId];
  //   }

  //   ev.dataTransfer.clearData();

  //   this.setState({
  //     elementData,
  //   });
  // };

  render() {
    const { elementData } = this.state;
    const elements = [...getElementList(elementData, this.dragStart)];
    const pname = this.props.location.state?.playerName;
    console.log("playerName", pname);

    return (
      <div class=" background w-full min-h-screen opacity-80 text-center  ">
        <div class="pt-20 text-center">
          <h1 className="text-5xl text-blue-800 mt-12 text-center font-bold  ">
            Move With Me
          </h1>
        </div>
        <div class="float-right text-right mr-8">
          <p class="text-xl">Hello {pname}! </p>
          <p class=" text-green-700"> Connection Status</p>
        </div>
        <div class="pt-48">
          <div class="flex justify-center">
            <Card title="Map" style={{ width: 500 }}></Card>

            <Card title="Controls" style={{ width: 500 }}>
              <div
                className="components-list"
                onDragOver={this.dragOver}
                class="flex justify-center"
              >
                <div
                  draggable={true}
                  onDragStart={(ev) => {
                    this.dragStart(ev, "left");
                  }}
                >
                  <ArrowLeftOutlined style={{ fontSize: "40px" }} />
                </div>
                <div
                  draggable={true}
                  onDragStart={(ev) => {
                    this.dragStart(ev, "right");
                  }}
                >
                  <ArrowRightOutlined style={{ fontSize: "40px" }} />
                </div>
                <div
                  draggable={true}
                  onDragStart={(ev) => {
                    this.dragStart(ev, "up");
                  }}
                >
                  <ArrowUpOutlined style={{ fontSize: "40px" }} />
                </div>
                <div
                  draggable={true}
                  onDragStart={(ev) => {
                    this.dragStart(ev, "down");
                  }}
                >
                  <ArrowDownOutlined style={{ fontSize: "40px" }} />
                </div>
              </div>
            </Card>
          </div>

          <div class="flex justify-center">
            <Card title="Command Tray" style={{ width: 1000 }}>
              <div
                class=" h-72 bg-gray-200"
                onDrop={this.drop}
                onDragOver={this.dragOver}
              >
                <p class="text-xl pt-8"> Drop Area</p>
                {elements}
              </div>
            </Card>
          </div>
        </div>
        <div class="mt-12">
          <Button type="primary">I am Done!</Button>
        </div>
      </div>
    );
  }
}

export default Challenge;
