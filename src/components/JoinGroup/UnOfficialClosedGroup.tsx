import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { GROUP_NICKNAME_ERROR_MSG, REQUIRE_ERROR_MSG } from '@constants/errorMsg';
import { GROUP_NICKNAME_PATTERN } from '@constants/validationPatterns';
import { useMutation } from '@tanstack/react-query';
import { joinGroupFn } from '@apis/groupApi';
import { GroupDetail } from '@apis/dto';
import { useNavigate } from 'react-router-dom';

interface nickNameInput {
  nickName: string;
}

const UnOfficialClosedGroup = ({ data }: { data: GroupDetail }) => {
  const navigate = useNavigate();
  const { groupId, groupName } = data;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<nickNameInput>({
    defaultValues: {
      nickName: '',
    },
  });
  const { mutate: joinGroup } = useMutation({
    mutationFn: (nickName: string) => joinGroupFn({ groupId, nickName }),
    onSuccess: () => {
      navigate(`/${groupId}/${groupName}`, { replace: true });
    },
    // 중복처리해야함
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
          {...register('nickName', {
            required: REQUIRE_ERROR_MSG,
            minLength: 2,
            maxLength: 8,
            pattern: GROUP_NICKNAME_PATTERN,
          })}
        />
        {errors.nickName && (
          <p className='text-xs mt-1 mx-1 flex items-center text-error'>
            {errors.nickName.message ? REQUIRE_ERROR_MSG : GROUP_NICKNAME_ERROR_MSG}
          </p>
        )}
      </div>
      <Button type='submit'>가입하기</Button>
    </form>
  );
};

export default UnOfficialClosedGroup;
