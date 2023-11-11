import React, { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import { getErrorMsg } from '@utils/serverError';
import { NOT_EXIST_PAGE_ERROR_MSG } from '@constants/errorMsg';

interface ErrorFallbackProps {
  error: Error;
}

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>(NOT_EXIST_PAGE_ERROR_MSG);
  const message = getErrorMsg(error);

  useEffect(() => {
    if (
      message === '해당 그룹에 대한 권한이 없습니다.' ||
      message === '해당 그룹에 속한 회원이 아닙니다.' ||
      message === '해당 그룹의 회원이 아닙니다' ||
      message === '해당 그룹에 속한 회원이 아닙니다'
    ) {
      navigate(`/${groupId}/join`, { replace: true });
    } else if (
      message === '존재하지 않는 그룹입니다.' ||
      message === '해당 그룹을 찾을 수 없습니다.' ||
      message === '그룹을 찾을 수 없습니다.'
    ) {
      setErrorMessage('존재하지 않는 그룹입니다.');
    }
  }, [groupId, message, setErrorMessage]);

  return (
    <main className='flex flex-col justify-center items-center gap-2 w-screen h-screen'>
      <h1 className='text-2xl font-extrabold'>404 NOT FOUND</h1>
      <p>{errorMessage}</p>
      <Button ripple={false} className='mt-5' onClick={() => navigate('/', { replace: true })}>
        홈으로
      </Button>
    </main>
  );
};

export default ErrorFallback;
