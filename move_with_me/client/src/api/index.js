import API from "axios";
API.defaults.baseURL = "http://localhost:5000/";

export const challenges = () => API.get("/challenges");