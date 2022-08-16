import axios from "axios";
var isToken = localStorage.getItem("token");
var baseUrl = "http://localhost:5001/";
var token = isToken ? isToken : "";

const header = {
  headers: {
    "Content-Type": "multipart/form-data",
    auth: token,
  },
};

const AXIOSImage = axios.create({
  baseURL: baseUrl,
  headers: header.headers,
});

export default AXIOSImage;
