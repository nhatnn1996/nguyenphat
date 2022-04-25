import axios from 'axios';
let callbackErrorAuthentication = () => {};
export const constructCallBack = (handle) => {
  callbackErrorAuthentication = handle;
};

const axiosClient = axios.create({
  baseURL: process.env.API_URL + '/wp-json',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a response interceptor
axiosClient.interceptors.request.use(function (config) {
  const stringAuth = `consumer_key=${process.env.CONSUMER_KEY}&consumer_secret=${process.env.CONSUMER_SECRECT}`;
  config.url = config.url + (config.url.includes('?') ? '&' : '?') + stringAuth;
  // const isAuth = config.url.includes('/settings');
  // if(isAuth)
  config.headers.Authorization = 'Basic YWRtaW46Q2hvbmd0aGFtbmd1eWVucGhhdDAxQA==';
  return config;
});

axiosClient.interceptors.response.use(
  function (data) {
    return data.data || data;
  },
  (error) => {
    return error;
  }
);

export default axiosClient;
