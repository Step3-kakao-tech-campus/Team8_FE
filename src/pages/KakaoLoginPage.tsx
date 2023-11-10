import React, { useEffect } from 'react';
import { kakaoLoginFn } from '@apis/authApi';
import { AUTH_KEYS } from '@constants/queryKeys';
import { Button, Spinner, Typography } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setCookie } from 'typescript-cookie';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '@recoil/atoms/auth';

const KakaoLoginPage = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const { data, error } = useQuery({
    queryKey: AUTH_KEYS.kakaoLogin({ code }),
    queryFn: () => kakaoLoginFn({ code }),
  });

  useEffect(() => {
    if (data) {
      setCookie('access-token', `${data.grantType} ${data.accessToken}`, {
        expires: new Date(data.accessTokenValidTime),
        path: '/',
      });
      setIsLoggedIn(true);
      navigate('/');
    }
  }, [data, navigate, setIsLoggedIn]);

  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto flex justify-center flex-col items-center h-96 shadow space-y-4 w-full max-w-[450px] px-16 pt-9 pb-16'>
        {error ? (
          <>
            <Typography variant='h6' className='text-error'>
              로그인에 실패하였습니다.
            </Typography>
            <Button onClick={() => navigate(-1)}>뒤로가기</Button>
          </>
        ) : (
          <>
            <Typography variant='h5'>로그인 중입니다.</Typography>
            <Typography variant='small'>잠시만 기다려주세요.</Typography>
            <Spinner className='h-10 w-10' />
          </>
        )}
      </div>
    </div>
  );
};

export default KakaoLoginPage;
