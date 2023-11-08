import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { UnOfficialGroupProps } from '@apis/dto';
import { nickNameRegister } from '@utils/Form/nickName';
import useJoinMutation from '@hooks/useJoinMutation';
import {
  GROUP_INVITE_CODE_ERROR_MSG,
  GROUP_INVITE_CODE_EXPIRED_ERROR_MSG,
  REQUIRE_ERROR_MSG,
} from '@constants/errorMsg';
import { useMutation } from '@tanstack/react-query';
import { checkInviteCodeFn } from '@apis/groupApi';
import { getErrorMsg } from '@utils/serverError';

interface ClosedGroupInput {
  nickName: string;
  inviteCode: string;
}

const UnOfficialClosedGroup = ({ data, onIsRegisteredAlertChange }: UnOfficialGroupProps) => {
  const { groupId, groupName } = data;
  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors, isValid },
  } = useForm<ClosedGroupInput>({
    defaultValues: {
      nickName: '',
      inviteCode: '',
    },
  });
  const { mutate: joinGroup } = useJoinMutation({
    groupId,
    groupName,
    nickName: getValues('nickName'),
    setError,
    onIsRegisteredAlertChange,
  });
  const { mutate: checkInviteCode } = useMutation({
    mutationFn: checkInviteCodeFn,
    onSuccess: () => {
      joinGroup();
    },
    onError: (error) => {
      const message = getErrorMsg(error);
      if (message === '잘못된 접근입니다.') {
        setError(
          'inviteCode',
          {
            type: 'wrong',
            message: GROUP_INVITE_CODE_ERROR_MSG,
          },
          {
            shouldFocus: true,
          },
        );
      } else if (message === '이미 만료된 초대 링크입니다.') {
        setError(
          'inviteCode',
          {
            type: 'expired',
            message: GROUP_INVITE_CODE_EXPIRED_ERROR_MSG,
          },
          {
            shouldFocus: true,
          },
        );
      }
    },
  });
  const handleJoin: SubmitHandler<FieldValues> = ({ inviteCode }) => {
    if (!isValid) return;

    checkInviteCode(inviteCode);
  };
  return (
    <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(handleJoin)}>
      <div className='w-full'>
        <Input
          type='text'
          label='닉네임'
          containerProps={{
            className: 'min-w-0 w-full',
          }}
          crossOrigin=''
          {...register('nickName', nickNameRegister)}
        />
        {errors.nickName && <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.nickName.message}</p>}
      </div>
      <div className='w-full'>
        <Input
          type='text'
          label='초대코드 입력'
          containerProps={{
            className: 'min-w-0 w-full',
          }}
          crossOrigin=''
          {...register('inviteCode', {
            required: REQUIRE_ERROR_MSG,
          })}
        />
        {errors.inviteCode && (
          <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.inviteCode.message}</p>
        )}
      </div>
      <Button type='submit'>가입하기</Button>
    </form>
  );
};

export default UnOfficialClosedGroup;
