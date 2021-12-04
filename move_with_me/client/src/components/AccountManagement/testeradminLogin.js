import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";


const testeradminLogin = () => {
    // usage of states for React
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");

    // passing through backend?
    const checkLogin = async () => {
        // const res1 = await 
    }

    return <div>tester</div>;
};
export default testeradminLogin;