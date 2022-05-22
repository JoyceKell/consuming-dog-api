import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thedogapi.com",
});

export default api;