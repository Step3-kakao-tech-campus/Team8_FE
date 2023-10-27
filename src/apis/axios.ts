/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
