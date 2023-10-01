import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '../assets/images/logo/textLogo.svg';
import DividerWithText from '../components/DividerWithText';

const SignUpPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 px-8'>
      <div className='mx-auto space-y-4 w-full max-w-[600px] border border-gray-400 px-32 py-9'>
        <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        <form className='space-y-8'>
          <Input label='이메일' crossOrigin='' data-testid='email' />
          <Input label='비밀번호' type='password' crossOrigin='' data-testid='password' />
          <Input label='이름' crossOrigin='' data-testid='name' />
          <Button className='w-full' data-testid='signUpBtn'>
            회원가입
          </Button>
        </form>
        <DividerWithText>또는</DividerWithText>
        {/* TODO 카카오톡 버튼으로 변경 필요 */}
        <Button className='w-full' data-testid='kakaoSignUpBtn'>
          카카오톡으로 회원가입
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
