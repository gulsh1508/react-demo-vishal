import axios from "axios";
var isToken = localStorage.getItem("token");
var baseUrl = "http://localhost:5001/";
var token = isToken ? isToken : "";

const header = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    auth: token,
  },
};

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: header.headers,
});

export default AxiosInstance;
