import axios from 'axios';
import { instance } from './axios';

const ENDPOINT = '/group';

export const groupSearchFn = ({ keyword }: { keyword: string }) =>
  instance.get(`${ENDPOINT}/search?keyword=${keyword}`).then(({ data }) => data.response);

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
export const fakeCreateGroupFn = () => axios.get('/data/createGroup.json').then(({ data }) => data.response);

export const getGroupInfoFn = (groupId: string) =>
  instance.get(`${ENDPOINT}/search/${groupId}`).then(({ data }) => data.response);
export const fakeGetGroupInfoFn = () => axios.get('/data/groupInfo.json').then(({ data }) => data.response);

export const checkGroupPassword = ({ groupId, entrancePassword }: { groupId: number; entrancePassword: string }) =>
  instance.post(`${ENDPOINT}/${groupId}/entry`, { entrancePassword });
