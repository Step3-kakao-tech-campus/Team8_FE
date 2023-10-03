import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import DividerWithText from '@components/DividerWithText';

const LoginPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 px-8'>
      <div className='mx-auto space-y-4 w-full max-w-[600px] border border-gray-400 px-32 py-9'>
        <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        <form className='space-y-12'>
          <Input label='이메일' crossOrigin='' data-testid='email' />
          <Input label='비밀번호' type='password' crossOrigin='' data-testid='password' />
          <Button className='w-full' data-testid='signUpBtn'>
            로그인
          </Button>
        </form>
        <div className='text-center text-xs'>
          {/* TODO 경로 지정 필요 */}
          <Link to='/'>회원가입</Link> | <Link to='/'>비밀번호 찾기</Link>
        </div>
        <DividerWithText>다른 계정으로 로그인</DividerWithText>
        {/* TODO 카카오톡 버튼으로 변경 필요 */}
        <Button className='w-full' data-testid='kakaoLoginBtn'>
          카카오톡으로 로그인
        </Button>
        {/* TODO 임시 로고 구성 아이콘 로고로 변경 필요 */}
        <TextLogo className='w-36 m-auto' />
      </div>
    </div>
  );
};

export default LoginPage;
