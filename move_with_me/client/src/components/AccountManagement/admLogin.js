import React, { useState, useContext } from "react";
import { useHistory } from "react-router";


export const GhLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const token = sessionStorage.getItem("token");
    console.log("This is your token", token)

    const clickHandler = () => {
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        }
        fetch('http://localhost:5000/token', opts)
            .then(resp => {
                if(resp.status === 200) return resp.json();
                else alert("error");
            })
            .then(data => {
                console.log("this came from backend", data);
                sessionStorage.setItem("token", data.token)
                history.push('/'); //to show that once login, redirect to homepage
            })
            .catch(error => {
                console.error("erorr2", error);
            })
    };
    
    //if try to access /ghlogin after logged in, redirects
    if(token && token != "" && token != undefined) history.push('/'); 

    return ( 
        <div>
            <div className="container">
                <div className="row">
                    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            {token && token != "" && token != undefined ? (
                                "Logged in with " + token 
                            ) : ( 
                            <div className="px-6 py-4">
                                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Move with Me</h2>
                                <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back!</h3>
                                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login to your admin account</p>

                                <div className="w-full mt-4">
                                    <label htmlFor="text">Username</label>
                                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="w-full mt-4">
                                    <label htmlFor="password">Password</label>
                                    <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                                    type="submit"
                                    onClick={clickHandler}>
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GhLogin;