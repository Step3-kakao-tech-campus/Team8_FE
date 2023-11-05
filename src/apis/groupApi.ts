import axios from 'axios';
import { instance } from './axios';

const ENDPOINT = '/group';

export const groupSearchFn = ({ keyword }: { keyword: string }) =>
  instance.get(`${ENDPOINT}/search?keyword=${keyword}`).then(({ data }) => data.response);

export const fakeGroupSearchFn = () => axios.get('/data/groupSearchResult.json').then(({ data }) => data.response);

interface groupInfoType {
  groupType: 'UNOFFICIAL_OPENED' | 'UNOFFICIAL_CLOSED';
  groupName: string;
  groupImage: string;
  groupNickName: string;
  introduction: string;
  entranceHint: string;
  entrancePassword: string;
}

export const createGroupFn = (groupInfo: groupInfoType) =>
  instance.post(`${ENDPOINT}/create`, groupInfo).then(({ data }) => data.response);

export const quitGroupFn = (groupId: string) =>
  instance.delete(`${ENDPOINT}/${groupId}`).then(({ data }) => data.response);

export const getGroupMyInfo = (groupId: number) =>
  instance.get(`${ENDPOINT}/${groupId}/myInfo`).then(({ data }) => data.response);

export const setGroupMyInfo = ({ groupId, newGroupNickName }: { groupId: number; newGroupNickName: string }) =>
  instance
    .patch(`${ENDPOINT}/${groupId}/myInfo`, { groupNickName: newGroupNickName })
    .then(({ data }) => data.response);
