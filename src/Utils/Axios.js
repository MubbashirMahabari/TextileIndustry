import axios from 'axios';
// import { LogoutAll } from './Helper';

const instance = axios.create({
  baseURL: 'URL/api'
});

instance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      const originalRequest = error.config;
      if (error?.response?.status === 401 && !originalRequest._retry) {
        LogoutAll();
      }
      return error
    }
  );
  
  export default instance;