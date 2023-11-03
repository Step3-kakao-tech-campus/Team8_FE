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

export const getGroupMemberFn = (groupId?: string) =>
  instance.get(`${ENDPOINT}/${groupId}/groupMembers`).then(({ data }) => data.response);
export const fakeGetGroupMemberFn = () => axios.get('/data/groupMembers.json').then(({ data }) => data.response);
