import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN } from '@constants/validationPatterns';
import {
  EMAIL_ERROR_MSG,
  NAME_ERROR_MSG,
  PASSWORD_ERROR_MSG,
  REQUIRE_ERROR_MSG,
  PASSWORD_CONFIRM_ERROR_MSG,
} from '@constants/errorMsg';
import { useMutation } from '@tanstack/react-query';
import { signUpFn } from '@apis/authApi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface SignUpInputs {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignUpInputs>({ mode: 'onChange' });
  const navigate = useNavigate();
  const { state } = useLocation();

  const { mutate: signUp } = useMutation({ mutationFn: signUpFn });

  const handleSignUpSubmit: SubmitHandler<FieldValues> = ({ email, password, name }) => {
    signUp(
      { email, password, name },
      {
        onSuccess: () => {
          navigate('/login', { state: { path: state?.path } });
        },
      },
    );
  };

  return (
    <div className='flex min-h-full flex-col justify-center px-8'>
      <div className='mx-auto space-y-4 w-full shadow max-w-[450px] px-16 pt-9 pb-16'>
        <Link to='/'>
          <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        </Link>
        <form className='space-y-12' onSubmit={handleSubmit(handleSignUpSubmit)}>
          <div>
            <Input
              label='이메일'
              type='email'
              crossOrigin=''
              data-testid='email'
              {...register('email', {
                required: REQUIRE_ERROR_MSG,
                pattern: { value: EMAIL_PATTERN, message: EMAIL_ERROR_MSG },
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
                pattern: { value: PASSWORD_PATTERN, message: PASSWORD_ERROR_MSG },
              })}
            />
            {errors.password && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.password.message}</p>
            )}
          </div>
          <div>
            <Input
              label='비밀번호 확인'
              type='password'
              crossOrigin=''
              data-testid='passwordConfirm'
              {...register('passwordConfirm', {
                required: REQUIRE_ERROR_MSG,
                validate: {
                  confirmMatchPassward: (value) => {
                    if (getValues('password') !== value) return PASSWORD_CONFIRM_ERROR_MSG;
                    return undefined;
                  },
                },
              })}
            />
            {errors.passwordConfirm && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.passwordConfirm.message}</p>
            )}
          </div>
          <div>
            <Input
              label='이름'
              crossOrigin=''
              data-testid='name'
              {...register('name', {
                required: REQUIRE_ERROR_MSG,
                pattern: { value: NAME_PATTERN, message: NAME_ERROR_MSG },
              })}
            />
            {errors.name && <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.name.message}</p>}
          </div>
          <Button type='submit' className='w-full' data-testid='signUpBtn' disabled={!isValid}>
            회원가입
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
