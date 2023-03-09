import axios from "axios";
import myLocalStorage from "@contants/localStorage";

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.VITE_SPOTIFY_BASE_URL,
      timeout: 10000,
    });
    this.instance.interceptors.response.use(
      (response) => {
        const result = { ...response.data, status: response.state };
        return result;
      },
      ({ response }) => {
        if (response.status === 401) {
          console.log("401");
        }
        const result = { ...response.data, status: response.status };
        return Promise.reject(result);
      }
    );
    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem(myLocalStorage.accessToken);
        if (accessToken) {
          config.headers.Authorization = accessToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }
  get(url, config = null) {
    return this.instance.get(url, config);
  }

  /* THIS PROJECT HAS NO POST METHOD */
  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }

  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config,
    });
  }
}

const http = new Http();
export default http;
