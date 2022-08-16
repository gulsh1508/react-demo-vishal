import axios from "axios";
var isToken = localStorage.getItem("token");
var baseUrl =
  " mongodb+srv://gulshan:gulshan123@cluster0.jqxrpxu.mongodb.net/NodeDemo";
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
