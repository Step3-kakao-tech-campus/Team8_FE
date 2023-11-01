import { instance } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getGroupListFn = () => instance.get(`/main`).then(({ data }) => data.response);
