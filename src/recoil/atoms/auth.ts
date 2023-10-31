import { atom } from 'recoil';
import { AUTH_RECOIL_KEYS } from '@constants/recoilKeys';

const isLoggedInState = atom<boolean>({
  key: AUTH_RECOIL_KEYS.isLoggedIn,
  default: true,
});

export default isLoggedInState;
