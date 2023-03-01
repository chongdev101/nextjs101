import Axios from "axios";

const axios = Axios.create({
  baseURL: `http://localhost:8080/api`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Authorization": 'Bearer 5X7UctKno_VONBPuN4z0VUASGA8',
  },
  // withCredentials: true,
});

export default axios;
