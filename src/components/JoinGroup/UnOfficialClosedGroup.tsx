import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { GROUP_EXIST_NICKNAME_ERROR_MSG } from '@constants/errorMsg';
import { useMutation } from '@tanstack/react-query';
import { joinGroupFn } from '@apis/groupApi';
import { GroupDetail } from '@apis/dto';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { nickNameRegister } from '@utils/Form/nickName';

interface UnOfficialClosedGroupProps {
  data: GroupDetail;
  onIsRegisteredAlertChange: () => void;
}
interface NickNameInput {
  nickName: string;
}

const UnOfficialClosedGroup = ({ data, onIsRegisteredAlertChange }: UnOfficialClosedGroupProps) => {
  const navigate = useNavigate();
  const { groupId, groupName } = data;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<NickNameInput>({
    defaultValues: {
      nickName: '',
    },
  });
  const { mutate: joinGroup } = useMutation({
    mutationFn: (nickName: string) => joinGroupFn({ groupId, nickName }),
    onSuccess: () => {
      navigate(`/${groupId}/${groupName}`, { replace: true });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorData = error.response?.data.error;
        const { message, status } = errorData;
        if (status === 400) {
          switch (message) {
            case '해당 닉네임은 이미 사용중입니다.':
              setError(
                'nickName',
                {
                  type: 'exist',
                  message: GROUP_EXIST_NICKNAME_ERROR_MSG,
                },
                {
                  shouldFocus: true,
                },
              );
              break;
            case '이미 가입된 회원입니다.':
              console.log('asdf');
              onIsRegisteredAlertChange();
              break;
            default:
              break;
          }
        }
      }
    },
  });

  const handleJoin: SubmitHandler<FieldValues> = ({ nickName }) => {
    if (!isValid) return;

    joinGroup(nickName);
  };
  return (
    <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit(handleJoin)}>
      <div>
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
        {errors.nickName && <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.nickName.message}</p>}
      </div>
      <Button type='submit'>가입하기</Button>
    </form>
  );
};

export default UnOfficialClosedGroup;
