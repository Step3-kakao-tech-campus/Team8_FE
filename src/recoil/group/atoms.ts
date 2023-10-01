import { atom } from 'recoil';

// 그룹 선택 여부에 따른 메뉴 변경을 위한 상태
const selectedGroupState = atom<string>({
  key: 'selectedGroupState',
  default: '부산대학교',
});

export default selectedGroupState;
