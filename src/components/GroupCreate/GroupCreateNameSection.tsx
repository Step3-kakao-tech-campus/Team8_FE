import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import { useRecoilState } from 'recoil';
import { groupCreateInfoState } from '@recoil/atoms/group';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { GROUP_NAME_ERROR_MSG, REQUIRE_ERROR_MSG } from '@constants/errorMsg';

interface GroupCreateNameSectionProps {
  onNextStep: () => void;
}

interface groupNameInput {
  groupName: string;
}

const GroupCreateNameSection = ({ onNextStep }: GroupCreateNameSectionProps) => {
  const [groupInfo, setGroupInfo] = useRecoilState(groupCreateInfoState);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<groupNameInput>({
    defaultValues: {
      groupName: groupInfo.groupName,
    },
  });

  const handleNextStep: SubmitHandler<FieldValues> = ({ groupName }) => {
    if (!isValid) return;

    setGroupInfo((prev) => ({ ...prev, groupName }));
    onNextStep();
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead'>
          새 그룹의 <strong>이름</strong>을 입력해주세요.
        </Typography>
        <Typography variant='paragraph'>그룹 이름은 최소 2자, 최대 12자까지 가능합니다.</Typography>
      </div>
      <form className='flex gap-2' onSubmit={handleSubmit(handleNextStep)}>
        <div className='grow'>
          <Input
            size='md'
            label='그룹 이름'
            containerProps={{ className: 'max-w-md' }}
            crossOrigin=''
            {...register('groupName', {
              required: REQUIRE_ERROR_MSG,
              minLength: {
                value: 2,
                message: GROUP_NAME_ERROR_MSG,
              },
              maxLength: {
                value: 12,
                message: GROUP_NAME_ERROR_MSG,
              },
            })}
          />
          {errors.groupName && (
            <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.groupName.message}</p>
          )}
        </div>
        <div>
          <Button ripple={false} type='submit'>
            확인
          </Button>
        </div>
      </form>
    </section>
  );
};

export default GroupCreateNameSection;
