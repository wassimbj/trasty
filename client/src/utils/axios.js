import axios from "axios";
import constants from "../constants";

const axiosInstance = axios.create({
  baseURL: constants.SERVER_URL,
  // baseURL: "https://trasty.herokuapp.com",
  withCredentials: true,
  // headers: {
  //    'X-CSRF-TOKEN': Cookies.get('csrfToken'),
  // }
});

export default axiosInstance;
