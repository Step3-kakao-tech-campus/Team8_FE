import { atom } from 'recoil';
import { AUTH_KEYS } from '@constants/recoilKeys';

const isLoggedInState = atom<boolean>({
  key: AUTH_KEYS.isLoggedIn,
  default: true,
});

export default isLoggedInState;
