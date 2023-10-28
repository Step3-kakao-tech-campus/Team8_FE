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
  const {
    register,
    formState: { errors, isValid },
  } = useForm<SignUpInputs>({ mode: 'onChange' });

  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto space-y-4 w-full shadow max-w-[450px] px-16 pt-9 pb-16'>
        <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        <form className='space-y-12'>
          <div>
            <Input
              label='이메일'
              type='email'
              crossOrigin=''
              data-testid='email'
              {...register('email', {
                required: REQUIRE_ERROR_MSG,
                pattern: { value: EMAIL_PATTERN, message: '이메일 형식이 맞지 않습니다.' },
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
                pattern: { value: PASSWORD_PATTERN, message: '8~20자 영문과 숫자를 사용하세요.' },
              })}
            />
            {errors.password && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.password.message}</p>
            )}
          </div>
          <div>
            <Input
              label='이름'
              crossOrigin=''
              data-testid='name'
              {...register('name', {
                required: REQUIRE_ERROR_MSG,
                pattern: { value: NAME_PATTERN, message: '1~10자 한글, 영어만 가능합니다.' },
              })}
            />
            {errors.name && <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.name.message}</p>}
          </div>
          <Button className='w-full' data-testid='signUpBtn' disabled={!isValid}>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
