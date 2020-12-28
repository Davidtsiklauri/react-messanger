import axios from "axios";
import authService from "./api/auth.service";

// Add a response interceptor
export default axios.interceptors.request.use(
  (response) => {
    const accessToken = authService.getUserId();

    if (accessToken) {
      response.headers["token"] = accessToken;
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
