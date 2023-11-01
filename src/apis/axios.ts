/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiYXV0aCI6InVzZXIiLCJleHAiOjE2OTg3OTU3MzN9.xaGpXFfVOEIYH5SJVv6TbEPUq_tWD01SymMxapYIwfM',
  },
});
