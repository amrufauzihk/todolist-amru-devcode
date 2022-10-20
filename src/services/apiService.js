import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://todo.api.devcode.gethired.id",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default axios;