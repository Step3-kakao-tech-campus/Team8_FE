import React from 'react';
import { Typography } from '@material-tailwind/react';

interface CommentProps {
  commentId: number;
  nickName: string;
  content: string;
  createdAt: string;
}

const Comment = ({ comment: { nickName, content, createdAt } }: { comment: CommentProps }) => {
  return (
    <li className='flex flex-col gap-1 list-none w-fit'>
      <div className='flex justify-between items-center'>
        <span className='text-[15px] font-semibold shrink-0'>{nickName}</span>
        <p className='mt-1 text-xs text-gray-600'>{createdAt}</p>
      </div>
      <Typography className='p-3 text-sm font-normal bg-gray-100 border rounded-lg'>{content}</Typography>
    </li>
  );
};

export default Comment;
