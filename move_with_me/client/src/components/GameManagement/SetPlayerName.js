import React, { useState } from "react";
import "../../assets/css/startGame.css";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../../assets/css/setPlayerName.css";
import { savePlayerNames } from "../../api";

const SetPlayerName = () => {
  const [name, setName] = useState("");
  const saveName = async (e) => {
    e.preventDefault();
    setName(e.target.value);

    const res1 = await savePlayerNames(name);
    if (res1.status == 200) {
      console.log("status 200");
    } else {
      console.log("error", res1.status);
    }
  };
  console.log("your name", name);
  return (
    <div class="background w-full min-h-screen opacity-80 text-center ">
      <div class="pt-96 ">
        <h1 class="font-semibold text-5xl  text-white p-12 ">
          What's your Name?
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
          >
            <Input
              size="large"
              placeholder="Set Player Name"
              onChange={(e) => setName(e.target.value)}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onSubmit={saveName}>
              Let's Go
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SetPlayerName;
