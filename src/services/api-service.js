import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const apiRoot = 'http://localhost:3000';
// export const apiRoot = 'https://jsonplaceholder.typicode.com';

export const client = axios.create({
  baseURL: apiRoot,
  timeout: 30000,
});

client.interceptors.request.use(
  async function (config) {
    // var basicAuth = await AsyncStorage.getItem('token');
    // console.log('Authentication Token... ', basicAuth);
    // if (basicAuth && basicAuth != null) {
    //   config.headers.Authorization = `Bearer ${basicAuth}`;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    console.log('API response...', response);
    return response;
  },
  function (error) {
    console.log('API error...', error);
    return Promise.reject(error);
  },
);
