import React, { ChangeEvent, useState } from 'react';
import { Collapse, Textarea } from '@material-tailwind/react';
import { MdSend, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import Comment from './Comment';

interface Comment {
  commentId: number;
  nickName: string;
  memberLevel: number;
  content: string;
  createdAt: string;
}

interface CommentsProps {
  isOpen: boolean;
  onCommentClose: () => void;
  comments: Comment[];
}

const Comments = ({ isOpen, onCommentClose, comments }: CommentsProps) => {
  const [text, setText] = useState<string>('');

  const handleChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    // Textarea 높이 자동 조절
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <Collapse open={isOpen} className='relative mb-12'>
      <button type='button' className='absolute top-4 right-4' onClick={onCommentClose}>
        <MdOutlineKeyboardArrowUp className='text-xl' />
      </button>
      <p className='pt-4 pl-4 font-bold border-t'>댓글 {comments.length}</p>
      <ul className='flex flex-col gap-4 p-4'>
        {comments.map((comment) => (
          <Comment key={comment.commentId} comment={comment} />
        ))}
      </ul>
      <div className='relative p-4 border-t'>
        <Textarea
          className='min-h-full max-h-60 text-lg border focus:!text-black'
          rows={3}
          resize
          label='댓글 작성'
          value={text}
          onChange={handleChangeText}
        />
        <button type='submit' className='absolute right-5 bottom-7 p-[6px]'>
          <MdSend className='text-xl text-gray-400 hover:text-black transition-all' />
        </button>
      </div>
    </Collapse>
  );
};

export default Comments;
