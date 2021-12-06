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

export const retrieveCommands = () => API.get("/retrieveCommands");

export const challenges = () => API.get("/challenges");

export const ghLogin = (adminDetails) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  var body = JSON.stringify(adminDetails);
  console.log("admin", adminDetails);
  return API.post("/token", body, config);
};
