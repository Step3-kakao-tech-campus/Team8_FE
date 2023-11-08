import { instance } from './axios';

const ENDPOINT = '/group';

export const groupSearchFn = ({ keyword }: { keyword: string }) =>
  instance.get(`${ENDPOINT}/search?keyword=${keyword}`).then(({ data }) => data.response);

interface GroupInfoType {
  groupType: 'UNOFFICIAL_OPENED' | 'UNOFFICIAL_CLOSED';
  groupName: string;
  groupImage: string;
  groupNickName: string;
  introduction: string;
  entranceHint: string;
  entrancePassword: string;
}

export const createGroupFn = (groupInfo: GroupInfoType) =>
  instance.post(`${ENDPOINT}/create`, groupInfo).then(({ data }) => data.response);

export const quitGroupFn = (groupId: string) =>
  instance.delete(`${ENDPOINT}/${groupId}`).then(({ data }) => data.response);

export const getGroupInfoFn = (groupId: number) =>
  instance.get(`${ENDPOINT}/search/${groupId}`).then(({ data }) => data.response);

export const checkGroupPasswordFn = ({ groupId, entrancePassword }: { groupId: number; entrancePassword: string }) =>
  instance.post(`${ENDPOINT}/${groupId}/entry`, { entrancePassword });

export const joinGroupFn = ({ groupId, nickName }: { groupId: number; nickName: string }) =>
  instance.post(`${ENDPOINT}/${groupId}/join`, { nickName });

export const getGroupMemberFn = (groupId: number) =>
  instance.get(`${ENDPOINT}/${groupId}/groupMembers`).then(({ data }) => data.response);

export const getGroupMyInfoFn = (groupId: number) =>
  instance.get(`${ENDPOINT}/${groupId}/myInfo`).then(({ data }) => data.response);

export const setGroupMyInfoFn = ({ groupId, newGroupNickName }: { groupId: number; newGroupNickName: string }) =>
  instance
    .patch(`${ENDPOINT}/${groupId}/myInfo`, { groupNickName: newGroupNickName })
    .then(({ data }) => data.response);

export const getMyContributeListFn = (groupId: number) =>
  instance.get(`${ENDPOINT}/${groupId}/myInfo/myHistory`).then(({ data }) => data.response);

export const getInviteCodeFn = (groupId: number) =>
  instance.get(`${ENDPOINT}/${groupId}/invitationLink`).then(({ data }) => data.response);

export const checkInviteCodeFn = (inviteCode: string) =>
  instance.get(`${ENDPOINT}/invitation/${inviteCode}`).then(({ data }) => data.response);
