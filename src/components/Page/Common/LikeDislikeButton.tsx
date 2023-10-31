import React from 'react';

import { Button } from '@material-tailwind/react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';

interface LikeDislikeButtonProps {
  upCount: number;
  downCount: number;
}

const LikeDislikeButton = ({ upCount, downCount }: LikeDislikeButtonProps) => {
  return (
    <div className='flex gap-2 h-7'>
      <Button size='sm' className='rounded-full py-0 flex items-center gap-1'>
        <MdThumbUp />
        {upCount}
      </Button>
      <Button color='white' size='sm' className='rounded-full py-0 flex items-center gap-1 border'>
        <MdThumbDown />
        {downCount}
      </Button>
    </div>
  );
};

export default LikeDislikeButton;