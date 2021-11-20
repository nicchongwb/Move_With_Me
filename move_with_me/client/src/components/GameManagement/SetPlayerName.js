import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import "../../assets/css/setPlayerName.css";

const SetPlayerName = () => {
  const [name, setName] = useState("");
  const saveName = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(e.target.value);
  };
  console.log("your name", name);
  return (
    <div class="background w-full min-h-screen opacity-80 text-center">
      <div class="pt-96 ">
        <h1 class="font-semibold text-5xl  text-white p-12 ">
          Set Player Name
        </h1>
      </div>
      <div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="playername"
            rules={[
              { required: true, message: "Please input your player name!" },
              {
                message: "Player name is up to 15 characters",
                validator: (_, value) => {
                  if (/^[a-zA-Z0-9]{5,15}$/.test(value)) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject("Player name not within 5-15 char");
                  }
                },
              },
            ]}
            onChange={(e) => setName(e.target.value)}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onSubmit={saveName}>
              Let's Go
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SetPlayerName;
