import { atom } from 'recoil';
import { GROUP_CREATE_RECOIL_KEYS } from '@constants/recoilKeys';

export const groupCreateInfoState = atom({
  key: GROUP_CREATE_RECOIL_KEYS.groupInfo,
  default: {
    groupType: 'UNOFFICIAL_OPENED' as 'UNOFFICIAL_OPENED' | 'UNOFFICIAL_CLOSED',
    groupName: '' as string,
    groupImage: '' as string,
    groupNickName: '' as string,
    introduction: '' as string,
    entranceHint: '' as string,
    entrancePassword: '' as string,
  },
});

export const groupImageFileState = atom({
  key: GROUP_CREATE_RECOIL_KEYS.groupImageFile,
  default: undefined as undefined | File,
});
