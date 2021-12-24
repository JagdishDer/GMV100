import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const apiRoot = 'https://api_url/';

export const client = axios.create({
  baseURL: apiRoot,
  timeout: 30000,
});

client.interceptors.request.use(
  async function (config) {
    var basicAuth = await AsyncStorage.getItem('token');
    console.log('Authentication Token... ', basicAuth);
    if (basicAuth && basicAuth != null) {
      config.headers.Authorization = `Bearer ${basicAuth}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    alert(error.response.data.message);
    return Promise.reject(error);
  },
);
