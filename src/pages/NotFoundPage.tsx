import { Button } from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 404 Not Found 페이지
 */
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className='text-center p-40'>
      <h1 className='text-2xl font-extrabold'>404 NOT FOUND</h1>
      <p>페이지를 찾을 수 없습니다.</p>
      <Button className='mt-5' onClick={() => navigate(-1)}>
        뒤로가기
      </Button>
    </div>
  );
};

export default NotFoundPage;
