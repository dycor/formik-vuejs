import axios from 'axios';
//import store from '@/store';

let instance = axios.create({
  baseURL: 'http://localhost:8083'
});

instance.interceptors.request.use(config => {
  config.headers.common['Authorization'] = localStorage.token;
  config.headers.common['AccessLevel'] = localStorage.accessLevel;
  return config;
});

export default instance;