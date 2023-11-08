/* eslint-disable import/prefer-default-export */
import axios, { InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'typescript-cookie';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    const newConfig = config;
    newConfig.headers.Authorization = getCookie('accessToken');

    return newConfig;
  }
  return config;
});
