import axios from "axios";

const api = axios.create({
  baseURL: "https://tasktracker-backend-yn01.onrender.com/api",
});

export default api;