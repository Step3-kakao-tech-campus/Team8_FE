import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import DividerWithText from '@components/Common/DividerWithText';
import { Button, Input, Typography } from '@material-tailwind/react';
import { GROUP_PASSWORD_ERROR_MSG, REQUIRE_ERROR_MSG } from '@constants/errorMsg';
import { useMutation } from '@tanstack/react-query';
import { checkGroupPasswordFn } from '@apis/groupApi';
import { nickNameRegister } from '@utils/Form/nickName';
import useJoinMutation from '@hooks/useJoinMutation';
import { getErrorMsg } from '@utils/serverError';
import { GroupDetail } from '@apis/dto';

interface OpenedGroupInput {
  nickName: string;
  entrancePassword: string;
}

interface UnOfficialGroupProps {
  data: GroupDetail;
  onIsRegisteredAlertChange: () => void;
}

const UnOfficialOpenedGroup = ({ data, onIsRegisteredAlertChange }: UnOfficialGroupProps) => {
  const { groupId, groupName, entranceHint } = data;
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isValid },
  } = useForm<OpenedGroupInput>({
    defaultValues: {
      nickName: '',
      entrancePassword: '',
    },
  });
  const { mutate: joinGroup } = useJoinMutation({
    groupId,
    groupName,
    nickName: getValues('nickName'),
    setError,
    onIsRegisteredAlertChange,
  });
  const { mutate: checkPassword } = useMutation({
    mutationFn: (entrancePassword: string) => checkGroupPasswordFn({ groupId, entrancePassword }),
    onSuccess: () => {
      joinGroup();
    },
    onError: (error) => {
      const message = getErrorMsg(error);
      if (message === '비밀번호가 틀렸습니다.') {
        setError(
          'entrancePassword',
          {
            type: 'wrong',
            message: GROUP_PASSWORD_ERROR_MSG,
          },
          {
            shouldFocus: true,
          },
        );
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
        <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(handleSendMail)}>
          <div className='w-full'>
            <Input
              type='text'
              label='닉네임'
              className=''
              containerProps={{
                className: 'min-w-0 w-full',
              }}
              crossOrigin=''
              {...register('nickName', nickNameRegister)}
            />
            {errors.nickName && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.nickName.message}</p>
            )}
          </div>
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
          <Button type='submit' className='rounded'>
            가입하기
          </Button>
        </form>
      </section>
    </div>
  );
};

export default UnOfficialOpenedGroup;
