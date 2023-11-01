import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import AUTH_KEYS from '@constants/recoilKeys';

const { persistAtom } = recoilPersist();

const tokenState = atom<string | null>({
  key: AUTH_KEYS.token,
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default tokenState;
