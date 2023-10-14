import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';

const SignUpPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto space-y-4 w-full shadow max-w-[450px] px-16 pt-9 pb-16'>
        <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        <form className='space-y-12'>
          <Input label='이메일' crossOrigin='' data-testid='email' />
          <Input label='비밀번호' type='password' crossOrigin='' data-testid='password' />
          <Input label='이름' crossOrigin='' data-testid='name' />
          <Button className='w-full' data-testid='signUpBtn'>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
