import { instance } from './axios';

const ENDPOINT = '/auth';

export const signUpFn = ({ email, password, name }: { email: string; password: string; name: string }) =>
  instance.post(`${ENDPOINT}/signup`, {
    email,
    password,
    nickName: name,
  });

export const loginFn = ({ email, password }: { email: string; password: string }) =>
  instance
    .post(`${ENDPOINT}/signin`, {
      email,
      password,
    })
    .then(({ data }) => data.response);

export const passwordFindFn = ({ email }: { email: string }) => instance.post(`${ENDPOINT}/password/find`, { email });

export const passwordChangeFn = ({ currentPassword, newPassword }: { currentPassword: string; newPassword: string }) =>
  instance.patch(`${ENDPOINT}/password/change`, { currentPassword, newPassword });

export const getMyInfoFn = () => instance.get(`${ENDPOINT}/myinfo`).then(({ data }) => data.response);
