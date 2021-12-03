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


export const challenges = () => API.get("/challenges");
