import { instance } from './axios';

// /group/${groupId}/page 관련 api

export const getPageByTitleFn = ({ groupId, title }: { groupId: string; title: string }) =>
  instance.get(`/group/${groupId}/page?title=${title}`);

export const createPageFn = ({ groupId, pageName }: { groupId: string; pageName: string }) =>
  instance.post(`/group/${groupId}/page/create`, { pageName });

export const getRecentChangeListFn = ({ groupId }: { groupId: string }) =>
  instance.get(`/group/${groupId}/page/recent`);

export const pageLikeFn = ({ groupId, pageId }: { groupId: string; pageId: number }) =>
  instance.post(`/group/${groupId}/page/${pageId}/like`);

export const pageHateFn = ({ groupId, pageId }: { groupId: string; pageId: number }) =>
  instance.post(`/group/${groupId}/page/${pageId}/hate`);
