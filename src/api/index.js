import axios from 'axios';

const ROOR_URL = 'https://61bc10c1d8542f001782453b.mockapi.io/';

const axiosRequest = axios.create({
  baseURL: ROOR_URL,
});

axiosRequest.interceptors.request.use(config => {
  return config;
});

axiosRequest.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log('error =>', error);
    return Promise.reject(error);
  },
);
