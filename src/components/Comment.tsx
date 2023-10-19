import React from 'react';
import { Typography } from '@material-tailwind/react';
import LEVELCOLOR from '../utils/constant';

interface CommentProps {
  commentId: number;
  nickName: string;
  memberLevel: number;
  content: string;
  createdAt: string;
}

const Comment = ({ comment: { nickName, memberLevel, content, createdAt } }: { comment: CommentProps }) => {
  return (
    <li className='flex gap-3 list-none '>
      <div className={`mt-1 w-8 h-8 ${LEVELCOLOR[memberLevel]} border rounded-full shrink-0`} />
      <div>
        <div className='p-2 w-fit bg-gray-100 rounded-2xl'>
          <span className='text-[15px] font-semibold'>{nickName}</span>
          <Typography className='text-sm font-normal'>{content}</Typography>
        </div>
        <p className='mt-1 text-xs text-gray-600'>{createdAt}</p>
      </div>
    </li>
  );
};

export default Comment;
