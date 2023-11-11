import React, { useEffect } from 'react';
import { Button, Input, Dialog, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { PASSWORD_CONFIRM_ERROR_MSG, PASSWORD_ERROR_MSG, REQUIRE_ERROR_MSG } from '@constants/errorMsg';
import { PASSWORD_PATTERN } from '@constants/validationPatterns';
import { useMutation } from '@tanstack/react-query';
import { passwordChangeFn } from '@apis/authApi';
import { getErrorMsg } from '@utils/serverError';

interface PasswordChangeModalProps {
  isOpen: boolean;
  handleOpen: () => void;
}

interface PasswordChangeInputs {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
}

const PasswordChangeModal = ({ isOpen, handleOpen }: PasswordChangeModalProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm<PasswordChangeInputs>({
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
    },
  });

  const { mutate: passwordChange, error } = useMutation({ mutationFn: passwordChangeFn });
  const handlePasswordChangeSubmit: SubmitHandler<FieldValues> = ({ currentPassword, newPassword }) => {
    passwordChange(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          handleOpen();
        },
      },
    );
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <Dialog size='xs' open={isOpen} handler={handleOpen} className='bg-transparent shadow-none'>
      <form onSubmit={handleSubmit(handlePasswordChangeSubmit)}>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4 text-black'>
            <div className='pb-2'>
              <Typography variant='h6' className='text-center mb-1'>
                변경할 비밀번호를 입력해주세요.
              </Typography>
              <Typography variant='small' className='text-center text-xs'>
                비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.
              </Typography>
            </div>
            <div>
              <Input
                type='password'
                label='현재 비밀번호'
                size='lg'
                crossOrigin={undefined}
                {...register('currentPassword', {
                  required: REQUIRE_ERROR_MSG,
                })}
              />
              {errors.currentPassword && (
                <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.currentPassword.message}</p>
              )}
            </div>
            <div>
              <Input
                type='password'
                label='새 비밀번호'
                size='lg'
                crossOrigin={undefined}
                {...register('newPassword', {
                  required: REQUIRE_ERROR_MSG,
                  pattern: { value: PASSWORD_PATTERN, message: PASSWORD_ERROR_MSG },
                })}
              />
              {errors.newPassword && (
                <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.newPassword.message}</p>
              )}
            </div>
            <div>
              <Input
                type='password'
                label='새 비밀번호 확인'
                size='lg'
                crossOrigin={undefined}
                {...register('newPasswordConfirm', {
                  required: REQUIRE_ERROR_MSG,
                  validate: {
                    confirmMatchPassward: (value) => {
                      if (getValues('newPassword') !== value) return PASSWORD_CONFIRM_ERROR_MSG;
                      return undefined;
                    },
                  },
                })}
              />
              {errors.newPasswordConfirm && (
                <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.newPasswordConfirm.message}</p>
              )}
            </div>
            {Boolean(error) && <p className='text-xs mx-1 text-center text-error'>{getErrorMsg(error)}</p>}
          </CardBody>
          <CardFooter className='pt-0'>
            <Button ripple={false} type='submit' variant='gradient' fullWidth disabled={!isValid}>
              변경하기
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Dialog>
  );
};

export default PasswordChangeModal;
