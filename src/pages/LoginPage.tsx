import React from 'react';
import { Link } from 'react-router-dom';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import DividerWithText from '@components/DividerWithText';

const LoginPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto shadow space-y-4 w-full max-w-[450px] px-16 pt-9 pb-16'>
        <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        <form className='space-y-12'>
          <Input label='이메일' crossOrigin='' data-testid='email' />
          <Input label='비밀번호' type='password' crossOrigin='' data-testid='password' />
          <Button className='w-full' data-testid='loginBtn'>
            로그인
          </Button>
        </form>
        <div className='text-center text-xs'>
          {/* TODO 경로 지정 필요 */}
          <Link to='/' data-testid='signUpLink'>
            회원가입
          </Link>
          {` | `}
          <Link to='/' data-testid='passwordFindLink'>
            비밀번호 찾기
          </Link>
        </div>
        <DividerWithText>다른 계정으로 로그인</DividerWithText>
        <Button
          className='flex font-[system-ui] justify-center w-full rounded-xl items-center gap-2 bg-kakaoContainer text-kakaoLabel'
          data-testid='kakaoLoginBtn'
        >
          <div className='relative w-5 h-5'>
            <RiKakaoTalkFill size={20} className='absolute inset-0 m-auto fill-kakaoSymbol' />
            <div className='absolute inset-0 m-auto bg-kakaoSymbol w-4 h-2 rounded-full' />
          </div>
          카카오 로그인
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
