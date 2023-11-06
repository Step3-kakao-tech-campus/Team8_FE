import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { groupCreateInfoState, groupImageFileState } from '@recoil/atoms/group';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import getImageUrl from '@apis/image';
import { nickNameRegister } from '@utils/Form/nickName';

interface onNextStepProps {
  onNextStep: () => void;
}

interface groupNickNameInput {
  groupNickName: string;
}

const GroupCreateNickNameSection = ({ onNextStep }: onNextStepProps) => {
  const [groupInfo, setGroupInfo] = useRecoilState(groupCreateInfoState);
  const groupImageFile = useRecoilValue(groupImageFileState);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<groupNickNameInput>({
    defaultValues: {
      groupNickName: groupInfo.groupNickName,
    },
  });

  const handleNextStep: SubmitHandler<FieldValues> = async ({ groupNickName }) => {
    if (!isValid) return;

    setGroupInfo((prev) => ({ ...prev, groupNickName }));
    if (groupImageFile !== undefined) {
      try {
        const imageUrl = await getImageUrl(groupImageFile);
        setGroupInfo((prev) => ({ ...prev, groupImage: imageUrl }));
      } catch (error) {
        console.log(error);
      }
    }
    onNextStep();
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead'>
          그룹에서 사용할 <strong>닉네임</strong>을 입력해주세요.
        </Typography>
        <Typography variant='paragraph'>닉네임은 2자 이상 8자 이하의 한글, 숫자 또는 영어로 구성해주세요.</Typography>
      </div>
      <form className='flex gap-2' onSubmit={handleSubmit(handleNextStep)}>
        <div className='grow'>
          <Input
            size='md'
            label='닉네임'
            containerProps={{ className: 'max-w-md' }}
            crossOrigin=''
            {...register('groupNickName', nickNameRegister)}
          />
          {errors.groupNickName && (
            <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.groupNickName.message}</p>
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

export default GroupCreateNickNameSection;
