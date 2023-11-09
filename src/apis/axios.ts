/* eslint-disable import/prefer-default-export */
import axios, { InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'typescript-cookie';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = getCookie('access-token');
  if (accessToken) {
    const newConfig = config;
    newConfig.headers.Authorization = accessToken;

    return newConfig;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.data.error.message === '링크 실패') {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  },
);
