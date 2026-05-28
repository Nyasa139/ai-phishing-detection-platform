import axios from "axios";

const API = axios.create({
 baseURL: "https://ai-phishing-backend-1o8c.onrender.com",
});

export default API;