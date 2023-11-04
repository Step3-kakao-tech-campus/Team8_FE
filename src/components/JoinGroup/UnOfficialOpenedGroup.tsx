import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import DividerWithText from '@components/Common/DividerWithText';
import { Button, Input, Typography } from '@material-tailwind/react';
import { GroupDetail } from '@apis/dto';
import { useNavigate } from 'react-router-dom';
import { GROUP_PASSWORD_ERROR_MSG, REQUIRE_ERROR_MSG } from '@constants/errorMsg';
import { useMutation } from '@tanstack/react-query';
import { checkGroupPassword } from '@apis/groupApi';
import { AxiosError } from 'axios';

interface entrancePasswordInput {
  entrancePassword: string;
}

const UnOfficialOpenedGroup = ({ data }: { data: GroupDetail }) => {
  const navigate = useNavigate();
  const { groupId, groupName, entranceHint } = data;
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors, isValid },
  } = useForm<entrancePasswordInput>({
    defaultValues: {
      entrancePassword: '',
    },
  });
  const { mutate: checkPassword } = useMutation({
    mutationFn: (entrancePassword: string) => checkGroupPassword({ groupId, entrancePassword }),
    onSuccess: () => {
      navigate(`/${groupId}/${groupName}`, { replace: true });
    },
    onError: (error) => {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorData = error.response?.data.error;
        const { message, status } = errorData;
        if (status === 400 && message === '비밀번호가 틀렸습니다.') {
          setFocus('entrancePassword');
          setError('entrancePassword', {
            type: 'manual',
            message: GROUP_PASSWORD_ERROR_MSG,
          });
        }
      }
    },
  });

  const handleSendMail: SubmitHandler<FieldValues> = ({ entrancePassword }) => {
    if (!isValid) return;

    checkPassword(entrancePassword);
  };
  return (
    <div className='w-full'>
      <section className='w-full text-center'>
        <DividerWithText>정답을 맞추면 가입할 수 있어요.</DividerWithText>
        <Typography variant='h6' className='text-sm mb-3 mt-6'>
          Q. {entranceHint}
        </Typography>
        <form className='relative flex w-full' onSubmit={handleSubmit(handleSendMail)}>
          <div className='w-full'>
            <Input
              type='text'
              label='정답 입력'
              className='pr-24'
              containerProps={{
                className: 'min-w-0 w-full',
              }}
              crossOrigin=''
              {...register('entrancePassword', {
                required: REQUIRE_ERROR_MSG,
              })}
            />
            {errors.entrancePassword && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.entrancePassword.message}</p>
            )}
          </div>
          <Button type='submit' size='sm' className='!absolute right-1 top-1 rounded'>
            가입하기
          </Button>
        </form>
      </section>
    </div>
  );
};

export default UnOfficialOpenedGroup;
