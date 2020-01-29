import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://localhost:8085'
});

instance.interceptors.request.use(config => {
  config.headers.common['Authorization'] = localStorage.token;
  config.headers.common['AccessLevel'] = localStorage.accessLevel;
  return config;
});

export default instance;