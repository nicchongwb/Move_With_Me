import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ghLogin } from '../../api'

export const GhLogin = () => {
    const history = useHistory();

    const [username, setUsername] = useState("");
    console.log(username);
    const [password, setPassword] = useState("");
    console.log(password)
    const adminU = sessionStorage.setItem("username", username);
    console.log(adminU);
    const adminP = sessionStorage.setItem("password", password);
    console.log(adminP);
    
    const authAdmin = async () => {
        const res1 = await ghLogin();
        //this is the data
        const data = res1.data;
        console.log(data)
        console.log(data.password)
        if (data.username = username && data.password == password) {
              const authentication = sessionStorage.setItem(
                "isAuthenticated",
                true
              );
            history.push("/");
            

        }
       else {
          history.push("/admLogin");
        }
    };
  

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
           
              <div className="px-6 py-4">
                <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
                  Move with Me
                </h2>
                <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                  Welcome Back!
                </h3>
                <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                  Login to your admin account
                </p>

                <div className="w-full mt-4">
                  <label htmlFor="text">Username</label>
                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={(e) =>
                      setUsername( e.target.value )
                    }
                  />
                </div>
                <div className="w-full mt-4">
                  <label htmlFor="password">Password</label>
                  <input
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={(e) =>
                      setPassword( e.target.value)
                    }
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
                    type="submit"
                   onClick = {authAdmin}
                  >
                    Sign in
                  </button> 
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};;
export default GhLogin;