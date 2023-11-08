import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { getErrorMsg } from '@utils/serverError';

interface ErrorFallbackProps {
  error: Error;
}

const InviteErrorFallback = ({ error }: ErrorFallbackProps) => {
  const navigate = useNavigate();
  const message = getErrorMsg(error);

  if (message === '존재하지 않는 초대링크입니다.' || message === '이미 만료된 초대 링크입니다.') {
    return (
      <>
        <Typography variant='h5'>{message}</Typography>
        <Button onClick={() => navigate('/', { replace: true })}>홈으로</Button>
      </>
    );
  }

  return (
    <main className='flex flex-col justify-center items-center gap-2 w-screen h-screen'>
      <h1 className='text-2xl font-extrabold'>404 NOT FOUND</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Button className='mt-5' onClick={() => navigate('/', { replace: true })}>
        홈으로
      </Button>
    </main>
  );
};

export default InviteErrorFallback;
