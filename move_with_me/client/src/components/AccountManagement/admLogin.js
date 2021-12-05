import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ghLogin } from '../../api'
import { Form, Input, Button, Card } from "antd";

export const GhLogin = () => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  console.log(username);
  const [password, setPassword] = useState("");
  console.log(password);
  const adminU = sessionStorage.setItem("username", username);
  console.log(adminU);
  const adminP = sessionStorage.setItem("password", password);
  console.log(adminP);

  const authAdmin = async () => {
    const res1 = await ghLogin();
    let authentication;
    //this is the data
    const data = res1.data;
    console.log("data", data);
    console.log(data.password);
    if ((data.username = username && data.password == password)) {
      history.push("/");
      authentication = sessionStorage.setItem("isAuthenticated", true);
    } else {
      history.push("/admLogin");
      authentication = sessionStorage.setItem("isAuthenticated", false);
    }
  };

  return (
    <div class="   background w-full min-h-screen opacity-90">
      <div class="w-6/12 text-center pt-96 m-auto">
        <h1 class="font-semibold text-6xl text-gray-800 pb-8">Move with Me</h1>
        <Card title="Login to your account">
          <div class="m-auto">
            <Form scrollToFirstError>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Username"
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  placeholder="input password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <Form.Item>
                <div class="text-center pt-8">
                  <Button type="primary" htmlType="submit" onClick={authAdmin}>
                    Login
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
};;
export default GhLogin;