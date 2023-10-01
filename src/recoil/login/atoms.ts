import { atom } from 'recoil';

const isLoggedInState = atom<boolean>({
  key: 'isLoggedInState',
  default: true,
});

export default isLoggedInState;
