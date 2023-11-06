import React from 'react';
import { Spinner, Typography } from '@material-tailwind/react';

const InviteProcessPage = () => {
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8 m-auto'>
      <Typography variant='h5'>잠시만 기다려주세요.</Typography>
      <Spinner className='h-12 w-12' />
    </div>
  );
};

export default InviteProcessPage;
