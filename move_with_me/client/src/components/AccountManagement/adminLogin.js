import React, { useState, useContext } from "react";
import { useHistory } from "react-router";


const AdmLogin = () => {
  // const { store, actions } = useState()
  //const { store, actions } = useContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const token = sessionStorage.getItem("token");
  console.log("This is your token", token);

  const clickHandler = async () => {
    //actions.AdmLogin(username, password);//.then(() => {
      // history.push("/")
    // })

    // const opts = {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     "username": username,
    //     "password": password
    //   })
    // }
  
    // fetch('http://localhost:5000/token', opts)
    //   .then(resp => {
    //     if (resp.status === 200) return resp.json();
    //     else alert("There has been some erorr");
    //   })
    //   .then(data => {
    //     console.log("Error in authentication from backend", data);
    //     sessionStorage.setItem("token", data.access_token)
    //   })
    //   .catch(error => {
    //     console.error("There was an error!", error);
    //   })

    // const opts = {
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     "username": username,
    //     "password": password
    //   })
    // }
  
    try{
      const resp = await fetch('http://localhost:5000/token')
      if (resp.status !== 200) {
        alert("There has been some erorr");
        return false;
      }
      const data = await resp.json();
      console.log("Error in authentication from backend", data);
      sessionStorage.setItem("token", data.access_token);
      //setStore({ token: data.access_token})
      return true;  
    }
  
    catch(error){
        console.error("there has been an error logging in");
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      {token && token != "" && token != undefined ? (
        "You are logged in with token" + token
      ) : (

        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Move with Me</h2>
          <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back!</h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login to your admin account</p>


          <form>

            <div className="w-full mt-4">
              <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="text" placeholder="Username" aria-label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />

              <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Admin Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forgot password?</a>

              <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="button" onClick={clickHandler}>Login</button>
            </div>
          </form>

        </div>
      )}
    </div>

    // TESTER
    // <div className="text-center mt-5">
    //   <h1>Move with Me</h1>
    //   <h2>Welcome back!</h2>
    //   <h3>Login to your admin account</h3>
    //   <div>
    //     <input type="text" placeholder="Username" />
    //     <input type="password" placeholder="Password" />
    //     <button className='btn'>Login</button>
    //   </div>
    // </div>
  );
};
export default AdmLogin;