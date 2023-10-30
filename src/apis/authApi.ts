import { instance } from './axios';

const ENDPOINT = '/auth';

// eslint-disable-next-line import/prefer-default-export
export const signUpFn = ({ email, password, name }: { email: string; password: string; name: string }) =>
  instance.post(`${ENDPOINT}/signup`, {
    email,
    password,
    nickName: name,
  });
