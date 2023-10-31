import React from 'react';

import { Button } from '@material-tailwind/react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import { pageHateFn, pageLikeFn } from '@apis/pageApi';
import { queryClient } from '@apis/queryClient';
import PAGE_KEYS from '@constants/queryKeys';

interface LikeDislikeButtonProps {
  goodCount: number;
  badCount: number;
  groupId: string;
  pageId: number;
  page: string;
}

const LikeDislikeButton = ({ goodCount, badCount, groupId, pageId, page }: LikeDislikeButtonProps) => {
  const likeMutateFn = () => pageLikeFn({ groupId, pageId });
  const dislikeMutateFn = () => pageHateFn({ groupId, pageId });

  const { mutate: likeMutate } = useMutation({
    mutationFn: likeMutateFn,
    onSuccess: () => {
      queryClient.invalidateQueries(PAGE_KEYS.byTitle({ groupId, title: page }));
    },
  });

  const { mutate: dislikeMutate } = useMutation({
    mutationFn: dislikeMutateFn,
    onSuccess: () => {
      queryClient.invalidateQueries(PAGE_KEYS.byTitle({ groupId, title: page }));
    },
  });

  const handleLikeClick = () => {
    likeMutate();
  };

  const handleDislikeClick = () => {
    dislikeMutate();
  };

  return (
    <div className='flex gap-2 h-7'>
      <Button size='sm' className='rounded-full py-0 flex items-center gap-1' onClick={handleLikeClick}>
        <MdThumbUp />
        {goodCount}
      </Button>
      <Button
        color='white'
        size='sm'
        className='rounded-full py-0 flex items-center gap-1 border'
        onClick={handleDislikeClick}
      >
        <MdThumbDown />
        {badCount}
      </Button>
    </div>
  );
};

export default LikeDislikeButton;
