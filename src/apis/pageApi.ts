import { instance } from './axios';

// /group/${groupId}/page 관련 api

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

export const searchPageFn = ({ groupId, keyword }: { groupId: number; keyword: string }) =>
  instance.get(`/group/${groupId}/page/search?keyword=${keyword}&page=1`);

export const getIndexListFn = ({ groupId, pageId }: { groupId: number; pageId: number }) =>
  instance.get(`/group/${groupId}/page/${pageId}/index`);
