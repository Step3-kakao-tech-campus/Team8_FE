import React from 'react';

import { IconButton, Typography } from '@material-tailwind/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

interface PaginationProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  lastIndex: number;
}

const Pagination = ({ active, setActive, lastIndex }: PaginationProps) => {
  const handleNext = () => {
    setActive((prev) => {
      if (prev === lastIndex) return prev;
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setActive((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  };

  return (
    <div className='flex items-center justify-center gap-4 mx-auto'>
      <IconButton size='sm' variant='text' onClick={handlePrev} disabled={active === 1}>
        <MdArrowBack size={15} />
      </IconButton>
      <Typography color='gray' className='font-normal'>
        Page <strong className='text-gray-900'>{active}</strong> of <strong className='text-gray-900'>10</strong>
      </Typography>
      <IconButton size='sm' variant='text' onClick={handleNext} disabled={active === lastIndex}>
        <MdArrowForward size={15} />
      </IconButton>
    </div>
  );
};

export default Pagination;
