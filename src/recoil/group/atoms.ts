import { atom } from 'recoil';

// 그룹 선택 여부에 따른 메뉴 변경을 위한 상태
const isGroupSelectedState = atom<boolean>({
  key: 'isGroupSelectedState',
  default: false,
});

export default isGroupSelectedState;
