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

// 댓글
export const getCommentsFn = ({ groupId, postId }: { groupId: number; postId: number }) =>
  instance.get(`/group/${groupId}/post/${postId}/comment?page=1`);

export const createCommentFn = ({ groupId, postId, content }: { groupId: number; postId: number; content: string }) =>
  instance.post(`/group/${groupId}/post/${postId}/comment`, { content });

export const modifyCommentFn = ({
  groupId,
  commentId,
  content,
}: {
  groupId: number;
  commentId: number;
  content: string;
}) => instance.patch(`/group/${groupId}/comment/${commentId}`, { content });

export const deleteCommentFn = ({ groupId, commentId }: { groupId: number; commentId: number }) =>
  instance.delete(`/group/${groupId}/comment/${commentId}`);
