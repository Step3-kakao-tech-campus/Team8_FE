import { instance } from './axios';

// group/groupId/post 관련 api

export const createPostFn = ({
  groupId,
  pageId,
  parentPostId,
  order,
  title,
  content,
}: {
  groupId: number;
  pageId: number;
  parentPostId: number;
  order: number;
  title: string;
  content: string;
}) => instance.post(`/group/${groupId}/post/create`, { pageId, parentPostId, order, title, content });

export const modifyPostFn = ({
  groupId,
  postId,
  title,
  content,
}: {
  groupId: number;
  postId: number;
  title: string;
  content: string;
}) => instance.put(`/group/${groupId}/post/modify`, { postId, title, content });

export const deletePostFn = ({ groupId, postId }: { groupId: number; postId: number }) =>
  instance.delete(`/group/${groupId}/post/${postId}`);
