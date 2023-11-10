import { atom } from 'recoil';
import { AUTH_KEYS } from '@constants/recoilKeys';
import { getCookie } from 'typescript-cookie';

const isLoggedInState = atom<boolean>({
  key: AUTH_KEYS.isLoggedIn,
  default: Boolean(getCookie('access-token')),
});

export default isLoggedInState;
