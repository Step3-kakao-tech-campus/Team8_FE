import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { ErrorFallbackProps } from '@apis/dto';

const getErrorMessage = (message: string) => {
  switch (message) {
    case '잘못된 접근입니다.':
      return '존재하지 않는 초대링크입니다.';
    case '이미 만료된 초대 링크입니다.':
      return message;
    default:
      return message;
  }
};

const InviteErrorFallback = ({ error }: ErrorFallbackProps) => {
  const navigate = useNavigate();

  if (error instanceof AxiosError) {
    const errorData = error.response?.data.error;
    const { status, message } = errorData;

    if (status === 404) {
      const errorMessage = getErrorMessage(message);
      return (
        <>
          <Typography variant='h5'>{errorMessage}</Typography>
          <Button onClick={() => navigate('/', { replace: true })}>홈으로</Button>
        </>
      );
    }
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
