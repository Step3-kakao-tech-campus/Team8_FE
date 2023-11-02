import { Spinner, Typography } from '@material-tailwind/react';
import React from 'react';

const KakaoLoginPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto flex justify-center flex-col items-center h-96 shadow space-y-4 w-full max-w-[450px] px-16 pt-9 pb-16'>
        <Typography variant='h5'>로그인 중입니다.</Typography>
        <Typography variant='small'>잠시만 기다려주세요.</Typography>
        <Spinner className='h-10 w-10' />
      </div>
    </div>
  );
};

export default KakaoLoginPage;
