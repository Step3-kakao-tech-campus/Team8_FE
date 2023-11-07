import { instance } from './axios';

// page 관련 api

interface PageInfo {
  groupId: number;
  pageId?: number;
  title?: string;
  pageName?: string;
}

export const getPageByTitleFn = ({ groupId, title }: PageInfo) => instance.get(`/group/${groupId}/page?title=${title}`);

export const createPageFn = ({ groupId, pageName }: PageInfo) =>
  instance.post(`/group/${groupId}/page/create`, { pageName });

export const getRecentChangeListFn = ({ groupId }: PageInfo) => instance.get(`/group/${groupId}/page/recent`);

export const pageLikeFn = ({ groupId, pageId }: PageInfo) => instance.post(`/group/${groupId}/page/${pageId}/like`);

export const pageHateFn = ({ groupId, pageId }: PageInfo) => instance.post(`/group/${groupId}/page/${pageId}/hate`);

export const searchPageFn = ({ groupId, keyword }: { groupId: number; keyword: string }) =>
  instance.get(`/group/${groupId}/page/search?keyword=${keyword}&page=1`);

export const getIndexListFn = ({ groupId, pageId }: PageInfo) => instance.get(`/group/${groupId}/page/${pageId}/index`);
