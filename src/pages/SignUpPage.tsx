import React from 'react';
import { Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '../assets/images/logo/textLogo.svg';

const SignUpPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 px-8'>
      <div className='mx-auto space-y-10 w-full max-w-[600px] border border-gray-400 px-32 py-9'>
        <TextLogo className='w-36 m-auto' data-testid='textLogo' />
        <form className='space-y-8'>
          <Input label='이메일' crossOrigin='' data-testid='email' />
          <Input label='비밀번호' type='password' crossOrigin='' data-testid='password' />
          <Input label='이름' crossOrigin='' data-testid='name' />
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
