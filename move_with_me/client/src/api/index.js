import axios from "axios";
import API from "axios";
API.defaults.baseURL = "http://localhost:5000/";

export const savePlayerNames = (name) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  var body = JSON.stringify(name);
  console.log("saveUsers", body);
  return API.post("/saveUsers", body, config);
};

export const saveCommands = (array) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  var body = JSON.stringify(array);
  console.log("saveCommands", array);
  return API.post("/saveCommands", body, config);
};

// export const saveCommands = () => API.get("/saveCommands");

export const challenges = () => API.get("/challenges");

// export const AdmLogin = (username, password) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   var body = JSON.stringify(username, password);
//   console.log("/token", body);
//   return API.post("/token", body, config);
// }
// export const AdmLogin = ({ setStore }) => {
//   login = async (username, password) => {
//     const opts = {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         "username": username,
//         "password": password
//       })
//     }
  
//     try{
//       const resp = await fetch('http://localhost:5000/token', opts)
//       if (resp.status !== 200) {
//         alert("There has been some erorr");
//         return false;
//       }
//       const data = await resp.json();
//       console.log("Error in authentication from backend", data);
//       sessionStorage.setItem("token", data.access_token);
//       setStore({ token: data.access_token})
//       return true;  
//     }
  
//     catch(error){
//         console.error("there has been an error logging in");
//     }  
//   }
// }

export const ghLogin = user => {
  return axios
      .post("/users/login", {
          username: user.username,
          password: user.password
      })
      .then(response => {
          localStorage.setItem('usertoken', response.data.token)
          return response.data.token
      })
      .catch(err => {
          console.log(err)
      })
}