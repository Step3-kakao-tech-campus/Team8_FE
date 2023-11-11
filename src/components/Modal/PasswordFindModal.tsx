import React from 'react';
import { Button, Input, Dialog, CardFooter, CardBody, Typography, Card, Spinner } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { passwordFindFn } from '@apis/authApi';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { EMAIL_ERROR_MSG, REQUIRE_ERROR_MSG } from '@constants/errorMsg';
import { getErrorMsg } from '@utils/serverError';
import { EMAIL_PATTERN } from '@constants/validationPatterns';

interface PasswordFindModalProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const PasswordFindModal = ({ isOpen, handleOpen }: PasswordFindModalProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<{ email: string }>({ mode: 'onChange' });

  const { mutate: passwordFind, isLoading } = useMutation({ mutationFn: passwordFindFn });

  const handlePasswordReset: SubmitHandler<FieldValues> = ({ email }) => {
    if (!isValid) return;

    passwordFind(
      { email },
      {
        onSuccess: () => {
          handleOpen();
        },
        onError: (error) => {
          const errorMsg = getErrorMsg(error);
          if (errorMsg) {
            setError('email', { message: errorMsg });
          }
        },
      },
    );
  };

  return (
    <Dialog size='xs' open={isOpen} handler={handleOpen} className='bg-transparent shadow-none'>
      <form onSubmit={handleSubmit(handlePasswordReset)}>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex h-44 flex-col gap-4 text-black'>
            <div className='pb-2'>
              <Typography variant='h6' className='text-center mb-1'>
                비밀번호 찾기
              </Typography>
              <Typography variant='small' className='text-center text-xs'>
                가입하신 이메일로 비밀번호 재설정이 가능합니다.
              </Typography>
            </div>
            {isLoading ? (
              <div className='flex justify-center gap-2'>
                <Typography variant='small'>이메일 전송중...</Typography>
                <Spinner />
              </div>
            ) : (
              <div>
                <Input
                  type='email'
                  label='이메일'
                  size='lg'
                  crossOrigin={undefined}
                  {...register('email', {
                    required: REQUIRE_ERROR_MSG,
                    pattern: { value: EMAIL_PATTERN, message: EMAIL_ERROR_MSG },
                  })}
                />
                {errors.email && (
                  <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.email.message}</p>
                )}
              </div>
            )}
          </CardBody>
          <CardFooter className='flex gap-2 pt-0'>
            <Button ripple={false} variant='outlined' onClick={handleOpen} fullWidth>
              취소
            </Button>
            <Button
              ripple={false}
              type='submit'
              variant='gradient'
              onClick={handlePasswordReset}
              fullWidth
              disabled={!isValid}
            >
              비밀번호 재설정
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Dialog>
  );
};

export default PasswordFindModal;
