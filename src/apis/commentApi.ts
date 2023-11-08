import { instance } from './axios';

interface CommentInfo {
  groupId: number;
  postId?: number;
  content?: string;
  commentId?: number;
}

// 댓글
export const getCommentsFn = ({ groupId, postId }: CommentInfo) =>
  instance.get(`/group/${groupId}/post/${postId}/comment?page=1`);

export const createCommentFn = ({ groupId, postId, content }: CommentInfo) =>
  instance.post(`/group/${groupId}/post/${postId}/comment`, { content });

export const modifyCommentFn = ({ groupId, commentId, content }: CommentInfo) =>
  instance.patch(`/group/${groupId}/comment/${commentId}`, { content });

export const deleteCommentFn = ({ groupId, commentId }: CommentInfo) =>
  instance.delete(`/group/${groupId}/comment/${commentId}`);
