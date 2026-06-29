import axios from "axios";

const API = axios.create({
  baseURL: "https://phishing-detector-backend-fif6.onrender.com",
});

export default API;