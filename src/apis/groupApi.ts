import axios from 'axios';
import { instance } from './axios';

const ENDPOINT = '/group';

export const groupSearchFn = ({ keyword }: { keyword: string }) =>
  instance.get(`${ENDPOINT}/search?keyword=${keyword}`);

export const fakeGroupSearchFn = ({ keyword }: { keyword: string }) =>
  axios.get('/data/groupSearch.json', { data: keyword });
