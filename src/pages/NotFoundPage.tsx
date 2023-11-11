import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
      <h1 className='text-2xl font-extrabold'>404 NOT FOUND</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Button ripple={false} className='mt-5' onClick={() => navigate(-1)}>
        뒤로가기
      </Button>
    </div>
  );
};

export default NotFoundPage;
