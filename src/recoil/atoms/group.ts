import { atom } from 'recoil';
import { GROUP_CREATE_RECOIL_KEYS } from '@constants/recoilKeys';

const groupCreateInfoState = atom({
  key: GROUP_CREATE_RECOIL_KEYS.groupInfo,
  default: {
    groupType: 'UNOFFICIAL_OPENED' as 'UNOFFICIAL_OPENED' | 'UNOFFICIAL_CLOSED',
    groupName: '' as string,
    groupImage: undefined as File | undefined,
    groupNickname: '' as string,
    introduction: '' as string,
    entranceHint: '' as string,
    entrancePassword: '' as string,
  },
});

export default groupCreateInfoState;
