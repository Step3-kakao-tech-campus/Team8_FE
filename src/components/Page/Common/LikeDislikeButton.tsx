import React, { useEffect, useState } from 'react';

import { Button } from '@material-tailwind/react';
import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import { useMutation } from '@tanstack/react-query';
import { pageHateFn, pageLikeFn } from '@apis/pageApi';

interface LikeDislikeButtonProps {
  goodCount: number;
  badCount: number;
  groupId: string;
  pageId: number;
}

const LikeDislikeButton = ({ goodCount, badCount, groupId, pageId }: LikeDislikeButtonProps) => {
  const [likeCount, setLikeCount] = useState(goodCount);
  const [dislikeCount, setDislikeCount] = useState(badCount);

  const { mutate: likeMutate } = useMutation({
    mutationFn: () => pageLikeFn({ groupId, pageId }),
    onSuccess: (response) => {
      console.log(response);
      setLikeCount(response.data.response.goodCount);
    },
  });

  const { mutate: dislikeMutate } = useMutation({
    mutationFn: () => pageHateFn({ groupId, pageId }),
    onSuccess: (response) => {
      setDislikeCount(response.data.response.badCount);
    },
  });

  const handleLikeClick = () => {
    likeMutate();
  };

  const handleDislikeClick = () => {
    dislikeMutate();
  };

  useEffect(() => {
    setLikeCount(goodCount);
    setDislikeCount(badCount);
  }, [goodCount, badCount]);

  return (
    <div className='flex gap-2 h-7'>
      <Button size='sm' className='rounded-full py-0 flex items-center gap-1' onClick={handleLikeClick}>
        <MdThumbUp />
        {likeCount}
      </Button>
      <Button
        color='white'
        size='sm'
        className='rounded-full py-0 flex items-center gap-1 border'
        onClick={handleDislikeClick}
      >
        <MdThumbDown />
        {dislikeCount}
      </Button>
    </div>
  );
};

export default LikeDislikeButton;
