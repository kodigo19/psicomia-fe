import axios from 'axios';    
import { URI_SERVER } from '../api/endpoints';

// Default config options
const defaultOptions = {
  baseURL: `${URI_SERVER}`,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
let axiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `${token}` : '';
  return config;
});

export default axiosInstance;