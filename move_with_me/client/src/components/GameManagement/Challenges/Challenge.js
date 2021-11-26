import React, { Component } from "react";
import "../../../assets/css/startGame.css";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

class Challenge extends Component {
  state = {
    tasks: [
      { name: "Up", arrow: <ArrowUpOutlined />, category: "wip" },
      { name: "Down", arrow: <ArrowDownOutlined />, category: "wip" },
      { name: "Left", arrow: <ArrowLeftOutlined />, category: "complete" },
      { name: "Right", arrow: <ArrowRightOutlined />, category: "complete" },
    ],
  };

  onDragStart = (ev, id) => {
    console.log("dragstart:", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks,
    });
  };

  render() {
    var tasks = {
      wip: [],
      complete: [],
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={(e) => this.onDragStart(e, t.name)}
          draggable
        >
          {t.arrow}
        </div>
      );
    });

    return (
      <div class=" background w-full min-h-screen opacity-80 text-center ">
        <div class="pt-20 text-center">
          <h1 className="text-5xl text-blue-800 mt-12 text-center font-bold  ">
            Move With Me
          </h1>
        </div>

        <div class="float-right text-right mr-8">
          <p class="text-xl">Hello Belle! </p>
          <p class=" text-green-700"> Connection Status</p>
        </div>

        <div class="flex mt-20 justify-evenly">
          <div class="">
            <h2 class="text-xl">Your Instruction </h2>
            <div class="h-4/5 w-full bg-gray-200 text-5xl ">
              <p>
                <ArrowUpOutlined></ArrowUpOutlined>
                <ArrowDownOutlined></ArrowDownOutlined>
                <ArrowLeftOutlined></ArrowLeftOutlined>
              </p>
              <p>
                <ArrowLeftOutlined></ArrowLeftOutlined>
                <ArrowUpOutlined></ArrowUpOutlined>
                <ArrowDownOutlined></ArrowDownOutlined>
              </p>
              <p>
                <ArrowUpOutlined></ArrowUpOutlined>
                <ArrowLeftOutlined></ArrowLeftOutlined>
                <ArrowLeftOutlined></ArrowLeftOutlined>
              </p>
            </div>
          </div>
          <div>
            <h2 class="text-xl">Controls </h2>
            <div
              class="h-4/5 w-full bg-gray-200 text-5xl "
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => {
                this.onDrop(e, "wip");
              }}
            >
              <div class="text-5xl"> {tasks.wip}</div>
            </div>
          </div>
          <div>
            <h2 class="text-xl">Drop Car Commands </h2>
            <div
              class="h-4/5 w-full bg-gray-200 text-5xl "
              onDragOver={(e) => this.onDragOver(e)}
              onDrop={(e) => this.onDrop(e, "complete")}
            >
              <div class="text-5xl"> {tasks.complete}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Challenge;
