import { instance } from './axios';

// page 관련 api

interface PageInfoType {
  groupId: number;
  pageId?: number;
  title?: string;
  pageName?: string;
}

export const getPageByTitleFn = ({ groupId, title }: PageInfoType) => instance.get(`/group/${groupId}/page?title=${title}`);

export const createPageFn = ({ groupId, pageName }: PageInfoType) =>
  instance.post(`/group/${groupId}/page/create`, { pageName });

export const getRecentChangeListFn = ({ groupId }: PageInfoType) => instance.get(`/group/${groupId}/page/recent`);

export const pageLikeFn = ({ groupId, pageId }: PageInfoType) => instance.post(`/group/${groupId}/page/${pageId}/like`);

export const pageHateFn = ({ groupId, pageId }: PageInfoType) => instance.post(`/group/${groupId}/page/${pageId}/hate`);

export const searchPageFn = ({ groupId, keyword }: { groupId: number; keyword: string }) =>
  instance.get(`/group/${groupId}/page/search?keyword=${keyword}&page=1`);

export const getIndexListFn = ({ groupId, pageId }: PageInfoType) => instance.get(`/group/${groupId}/page/${pageId}/index`);

export const checkPageExistence = ({ groupId, title }: PageInfoType) =>
  instance.get(`/group/${groupId}/page/link?title=${title}`);
