import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN } from '@constants/validationPatterns';
import { REQUIRE_ERROR_MSG } from '@constants/errorMsg';

interface SignUpInputs {
  email: string;
  password: string;
  name: string;
}

const SignUpPage = () => {
  const { register } = useForm<SignUpInputs>();

  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto space-y-4 w-full shadow max-w-[450px] px-16 pt-9 pb-16'>
        <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        <form className='space-y-12'>
          <Input
            label='이메일'
            type='email'
            crossOrigin=''
            data-testid='email'
            {...register('email', {
              required: REQUIRE_ERROR_MSG,
              pattern: { value: EMAIL_PATTERN, message: '이메일 주소를 다시 확인해주세요.' },
            })}
          />
          <Input
            label='비밀번호'
            type='password'
            crossOrigin=''
            data-testid='password'
            {...register('password', {
              required: REQUIRE_ERROR_MSG,
              pattern: { value: PASSWORD_PATTERN, message: '8~20자 영문과 숫자를 사용하세요.' },
            })}
          />
          <Input
            label='이름'
            crossOrigin=''
            data-testid='name'
            {...register('name', {
              required: REQUIRE_ERROR_MSG,
              pattern: { value: NAME_PATTERN, message: '1~10자 한글, 영어만 가능합니다.' },
            })}
          />
          <Button className='w-full' data-testid='signUpBtn'>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
