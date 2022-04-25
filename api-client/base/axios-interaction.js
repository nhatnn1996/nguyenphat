import axios from 'axios';

let callbackErrorAuthentication = () => {};

export const constructCallBack = (handle) => {
  callbackErrorAuthentication = handle;
};

const axiosInteraction = axios.create({
  baseURL: process.env.API_INTERACTION + '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a response interceptor
axiosInteraction.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      callbackErrorAuthentication();
    }
    return Promise.reject(error);
  }
);

axiosInteraction.interceptors.request.use(function (config) {
  const token = window?.localStorage?.getItem('token');
  if (config.method === 'post') config.url = config.url + (config.url.includes('?') ? '&' : '?') + 'view=' + window.location.pathname;
  if (token) config.headers.Authorization = 'Bearer ' + token;
  return config;
});
export const fechInteract = (url) => axiosInteraction.get(url);
export default axiosInteraction;
