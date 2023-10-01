import React from 'react';
import { ReactComponent as TextLogo } from '../assets/images/logo/textLogo.svg';

const SignUpPage = () => {
  return (
    <div className='flex min-h-full flex-col justify-center py-12 px-8'>
      <div className='mx-auto w-full max-w-[600px] border border-gray-400 px-32 py-9'>
        <TextLogo className='w-36 m-auto' data-testid='textLogo' />
      </div>
    </div>
  );
};

export default SignUpPage;
