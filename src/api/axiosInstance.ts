import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.swtch.life", // ✅ Your backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;