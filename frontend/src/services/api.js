import axios from "axios";

const api = axios.create({
  baseURL: "https://cms-assignment-wu94.onrender.com/api",
});

export default api;