import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5040",
});

export default instance;