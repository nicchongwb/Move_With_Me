import React, { useState, Component, useContext } from "react";
import { useHistory } from "react-router";
import { Context } from "../Store/appContext";

export const GhLogin = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const token = sessionStorage.getItem("token");
    console.log("This is your token", token)

    const clickHandler = () => {
        actions.login(username, password).then(() => {
            history.push('/')
        })

        // COPIED TO FLUX.JS
        // const opts = {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "username": username,
        //         "password": password
        //     })
        // }
        // fetch('http://localhost:5000/token', opts)
        //     .then(resp => {
        //         if(resp.status === 200) return resp.json();
        //         else alert("error");
        //     })
        //     .then(data => {
        //         console.log("this came from backend", data);
        //         sessionStorage.setItem("token", data.token)
        //     })
        //     .catch(error => {
        //         console.error("erorr2", error);
        //     })
        // COPIED TO FLUX.JS
    };
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              {/* {token && token != "" && token != undefined ? (
                                "Logged in with " + token 
                            ) : ( 
                              <div>  
                                <div className="form-group">
                                    <label htmlFor="text">Username</label>
                                    <input type="text"
                                        className="form-control"
                                        name="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button onClick={clickHandler} type="submit" className="btn btn-lg btn-primary btn-block">
                                    Sign in
                                </button>
                            </div>
                        )} */}
            </div>
          </div>
        </div>
      </div>
    );
};
export default GhLogin;