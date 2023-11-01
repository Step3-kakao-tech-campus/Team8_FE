import { instance } from './axios';

// /group/${groupId}/page 관련 api

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiYXV0aCI6InVzZXIiLCJleHAiOjE2OTg3NzMxMzl9.mf9x6yoqdwgL8nRl7qjdekaP0MScAqIfEztgLkkbnnk';
instance.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getPageByTitleFn = ({ groupId, title }: { groupId: number; title: string }) =>
  instance.get(`/group/${groupId}/page?title=${title}`);

export const createPageFn = ({ groupId, pageName }: { groupId: number; pageName: string }) =>
  instance.post(`/group/${groupId}/page/create`, { pageName });

export const getRecentChangeListFn = ({ groupId }: { groupId: number }) =>
  instance.get(`/group/${groupId}/page/recent`);

export const pageLikeFn = ({ groupId, pageId }: { groupId: number; pageId: number }) =>
  instance.post(`/group/${groupId}/page/${pageId}/like`);

export const pageHateFn = ({ groupId, pageId }: { groupId: number; pageId: number }) =>
  instance.post(`/group/${groupId}/page/${pageId}/hate`);
