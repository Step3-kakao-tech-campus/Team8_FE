import React, { ChangeEvent, RefObject, useEffect, useState } from 'react';
import { Collapse, Textarea } from '@material-tailwind/react';
import { MdSend, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createCommentFn, getCommentsFn } from '@apis/commentApi';
import { COMMENT_KEYS } from '@constants/queryKeys';
import { queryClient } from '@apis/queryClient';
import Comment from './Comment';

interface Comment {
  commentId: number;
  nickName: string;
  content: string;
  createdAt: string;
  mine: boolean;
}

interface CommentListProps {
  groupId: number;
  postId: number;
  commentRef: RefObject<HTMLDivElement>;
  isOpen: boolean;
  onCommentClose: () => void;
  setCommentCount: (count: number) => void;
}

const CommentList = ({ groupId, postId, commentRef, isOpen, onCommentClose, setCommentCount }: CommentListProps) => {
  const [text, setText] = useState<string>('');

  const { data, isLoading } = useQuery({
    queryKey: COMMENT_KEYS.commentList({ groupId, postId }),
    queryFn: () => getCommentsFn({ groupId, postId }),
  });

  const { comments } = data?.data?.response || [];

  const { mutate: createComment } = useMutation({
    mutationFn: createCommentFn,
    onSuccess: () => {
      setText('');
      queryClient.invalidateQueries(COMMENT_KEYS.commentList({ groupId, postId }));
    },
  });

  const handleCreateComment = () => {
    if (!text.trim()) return;
    createComment({ groupId, postId, content: text.trim() });
  };

  const handleCreateCommentOnEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!text.trim()) return;
    if (e.key === 'Enter' && !e.shiftKey && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      handleCreateComment();
    }
  };

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '\n') return;

    setText(e.target.value);
    // Textarea 높이 자동 조절
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  useEffect(() => {
    if (!comments) return;
    setCommentCount(comments?.length);
  }, [comments?.length, setCommentCount]);

  return (
    <Collapse open={isOpen} ref={commentRef} className='relative mb-4'>
      <button type='button' className='absolute top-4 right-4' onClick={onCommentClose}>
        <MdOutlineKeyboardArrowUp className='text-xl' />
      </button>

      {!isLoading && (
        <div>
          <p className='pt-4 pl-1 font-bold border-t text-sm'>댓글 {comments.length}</p>
          {comments.length === 0 ? (
            <p className='p-4 text-center text-gray-400 text-xs mb-4'>댓글이 없습니다.</p>
          ) : (
            <ul className='flex flex-col gap-5 px-2 py-4'>
              {comments.map((comment: Comment) => (
                <Comment key={uuidv4()} comment={comment} groupId={groupId} postId={postId} />
              ))}
            </ul>
          )}
        </div>
      )}

      <div className='relative flex gap-3 pl-1 pr-4 py-4 border-t'>
        <Textarea
          className='min-h-full max-h-60 text-lg border focus:!text-black'
          rows={3}
          resize
          label='댓글 작성'
          value={text}
          onChange={handleChangeText}
          onKeyDown={handleCreateCommentOnEnter}
        />
        <button
          type='submit'
          disabled={!text.trim()}
          className={`absolute right-5 bottom-5 p-[6px] rounded-full ${text ? 'hover:bg-gray-200' : ''}`}
          onClick={handleCreateComment}
        >
          <MdSend className={`text-xl transition-all ${text ? 'text-black' : 'text-gray-400'}`} size={15} />
        </button>
      </div>
    </Collapse>
  );
};

export default CommentList;
