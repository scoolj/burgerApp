import axios from "axios";

const instance = axios.create({
  baseURL: "https://myburgerapp-a6f43.firebaseio.com/",
});

export default instance;
