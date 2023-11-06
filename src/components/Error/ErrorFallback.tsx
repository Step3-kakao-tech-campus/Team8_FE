import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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

interface ErrorProps {
  error: Error;
}

const ErrorFallback = ({ error }: ErrorProps) => {
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

  return <div>asdf</div>;
};

export default ErrorFallback;
