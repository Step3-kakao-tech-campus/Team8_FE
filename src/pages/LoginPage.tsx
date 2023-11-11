import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import DividerWithText from '@components/Common/DividerWithText';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { REQUIRE_ERROR_MSG } from '@constants/errorMsg';
import { loginFn } from '@apis/authApi';
import { useMutation } from '@tanstack/react-query';
import { getErrorMsg } from '@utils/serverError';
import useModal from '@hooks/useModal';
import PasswordFindModal from '@components/Modal/PasswordFindModal';
import { setCookie } from 'typescript-cookie';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '@recoil/atoms/auth';

const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}`;

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({ mode: 'onChange' });
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const passwordFindModal = useModal();

  const { mutate: login, error } = useMutation({ mutationFn: loginFn });

  const handleLoginSubmit: SubmitHandler<FieldValues> = ({ email, password }) => {
    login(
      { email, password },
      {
        onSuccess: ({ grantType, accessToken, accessTokenValidTime }) => {
          setCookie('access-token', `${grantType} ${accessToken}`, {
            expires: new Date(accessTokenValidTime),
            path: '/',
          });
          setIsLoggedIn(true);
          navigate('/');
        },
      },
    );
  };

  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto shadow space-y-4 w-full max-w-[450px] px-16 pt-9 pb-16'>
        <Link to='/'>
          <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        </Link>
        <form className='space-y-12' onSubmit={handleSubmit(handleLoginSubmit)}>
          <div>
            <Input
              label='이메일'
              type='email'
              crossOrigin=''
              data-testid='email'
              {...register('email', {
                required: REQUIRE_ERROR_MSG,
              })}
            />
            {errors.email && <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.email.message}</p>}
          </div>
          <div>
            <Input
              label='비밀번호'
              type='password'
              crossOrigin=''
              data-testid='password'
              {...register('password', {
                required: REQUIRE_ERROR_MSG,
              })}
            />
            {errors.password && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.password.message}</p>
            )}
          </div>
          {Boolean(error) && <p className='text-xs mx-1 text-center text-error'>{getErrorMsg(error)}</p>}
          <Button ripple={false} type='submit' className='w-full' data-testid='loginBtn' disabled={!isValid}>
            로그인
          </Button>
        </form>
        <div className='text-center text-xs'>
          <Link to='/signUp' data-testid='signUpLink'>
            회원가입
          </Link>
          {` | `}
          <button type='button' data-testid='passwordFindLink' onClick={passwordFindModal.handleModal}>
            비밀번호 찾기
          </button>
          <PasswordFindModal isOpen={passwordFindModal.isOpen} handleOpen={passwordFindModal.handleModal} />
        </div>
        <DividerWithText>다른 계정으로 로그인</DividerWithText>
        <a href={KAKAO_URL}>
          <Button
            ripple={false}
            className='flex font-[system-ui] justify-center w-full rounded-xl items-center gap-2 bg-kakaoContainer text-kakaoLabel'
            data-testid='kakaoLoginBtn'
          >
            <div className='relative w-5 h-5'>
              <RiKakaoTalkFill size={20} className='absolute inset-0 m-auto fill-kakaoSymbol' />
              <div className='absolute inset-0 m-auto bg-kakaoSymbol w-4 h-2 rounded-full' />
            </div>
            카카오 로그인
          </Button>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
