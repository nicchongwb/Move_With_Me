import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ghLogin } from '../../api'
import { Input, Card, Button } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

import "../../assets/css/startGame.css";

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
    //this is the data
    const data = res1.data;
    console.log(data);
    console.log(data.password);
    sessionStorage.setItem("token", data.access_token);
    if ((data.username = username && data.password == password)) {
      // if (data['Object'][0]['username'] = username && data['Object'][0]['password'] = password) {
      // if (data['username'] && data['password'] && data.access_token) {
      // if (data.username = username && data.password == password && data.access_token && data.access_token != "" && data.access_token != undefined) {
      const authentication = sessionStorage.setItem("isAuthenticated", true);
      //   const store_token = sessionStorage.setItem("token", data.access_token)
      // sessionStorage.setItem("token", data.access_token)
      history.push("/adminHome");
    } else {
      history.push("/admLogin");
    }
  };

  return (
    <div>
      <div class="background w-full min-h-screen opacity-80 text-center ">
        <div class="pt-20 text-center">
          <h1 className="text-6xl text-gray-800  mt-12 text-center font-bold  ">
            Move With Me
          </h1>
        </div>
        <div class="flex justify-center mt-12">
          <Card title="Login" style={{ width: 700, height: 400 }}>
            <div class="flex mt-12">
              <p class="mr-2">Username </p>
              <Input
                size="large"
                placeholder="Enter username"
                prefix={<UserOutlined />}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="flex mt-12">
              <p class="mr-2">Password </p>
              <Input.Password
                size="large"
                placeholder="Enter password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="mt-12">
              <Button type="primary" onClick={authAdmin}>
                Login
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};;
export default GhLogin;