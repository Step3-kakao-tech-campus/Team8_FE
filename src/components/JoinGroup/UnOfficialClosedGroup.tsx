import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { GroupDetail } from '@apis/dto';
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
  inviteLink: string;
}

interface UnOfficialGroupProps {
  data: GroupDetail;
  inviteCode: string;
  onIsRegisteredAlertChange: () => void;
}

const UnOfficialClosedGroup = ({ data, inviteCode, onIsRegisteredAlertChange }: UnOfficialGroupProps) => {
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
      inviteLink: `${process.env.REACT_APP_API_URL}/invite/${inviteCode}`,
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
      if (message === '잘못된 접근입니다.' || message === '존재하지 않는 초대 링크입니다.') {
        setError(
          'inviteLink',
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
          'inviteLink',
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
  const handleJoin: SubmitHandler<FieldValues> = ({ inviteLink }) => {
    if (!isValid) return;

    const inviteLinkArray = inviteLink.split('/');
    checkInviteCode(inviteLinkArray[inviteLinkArray.length - 1]);
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
          label='초대링크 입력'
          containerProps={{
            className: 'min-w-0 w-full',
          }}
          crossOrigin=''
          {...register('inviteLink', {
            required: REQUIRE_ERROR_MSG,
          })}
        />
        {errors.inviteLink && (
          <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.inviteLink.message}</p>
        )}
      </div>
      <Button ripple={false} type='submit' className='rounded'>
        가입하기
      </Button>
    </form>
  );
};

export default UnOfficialClosedGroup;
