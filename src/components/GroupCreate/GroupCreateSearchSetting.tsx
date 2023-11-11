import React from 'react';
import { Typography, Input, Button, Radio } from '@material-tailwind/react';
import { useRecoilState } from 'recoil';
import { groupCreateInfoState } from '@recoil/atoms/group';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { REQUIRE_ERROR_MSG } from '@constants/errorMsg';

interface GroupCreateSearchSettingProps {
  onNextStep: () => void;
}

interface OpenGroupInputs {
  introduction: string;
  entranceHint: string;
  entrancePassword: string;
}

const GroupCreateSearchSetting = ({ onNextStep }: GroupCreateSearchSettingProps) => {
  const [groupInfo, setGroupInfo] = useRecoilState(groupCreateInfoState);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OpenGroupInputs>({
    defaultValues: {
      introduction: groupInfo.introduction,
      entranceHint: groupInfo.entranceHint,
      entrancePassword: groupInfo.entrancePassword,
    },
  });

  const handleNextStep: SubmitHandler<FieldValues> = ({ introduction, entranceHint, entrancePassword }) => {
    if (!isValid) return;

    setGroupInfo((prev) => ({ ...prev, introduction, entranceHint, entrancePassword }));
    onNextStep();
  };
  return (
    <section className='space-y-4'>
      <div>
        <Typography variant='lead'>
          그룹의 <strong>공개</strong> 여부를 알려주세요.
        </Typography>
        <Typography variant='paragraph'>
          비공개 시 그룹 검색 결과에 나타나지 않으며, 초대 링크로만 가입이 가능합니다.
        </Typography>
      </div>
      <div>
        <div className='flex gap-2 flex-wrap'>
          <Radio
            name='type'
            label={<strong>공개</strong>}
            onChange={() => {
              setGroupInfo((prev) => ({
                ...prev,
                groupType: 'UNOFFICIAL_OPENED',
              }));
            }}
            checked={groupInfo.groupType === 'UNOFFICIAL_OPENED'}
            crossOrigin=''
          />
          <Radio
            label={<strong>비공개</strong>}
            onChange={() => {
              setGroupInfo((prev) => ({
                ...prev,
                groupType: 'UNOFFICIAL_CLOSED',
              }));
            }}
            checked={groupInfo.groupType === 'UNOFFICIAL_CLOSED'}
            crossOrigin=''
          />
        </div>
        {groupInfo.groupType === 'UNOFFICIAL_OPENED' ? (
          <form className='p-3' onSubmit={handleSubmit(handleNextStep)}>
            <Typography variant='small' className='mb-2'>
              <strong>한줄 소개글</strong>을 입력해주세요. 검색 결과에 함께 노출됩니다.
            </Typography>
            <div>
              <Input
                size='md'
                label='소개글'
                containerProps={{ className: 'max-w-md' }}
                crossOrigin=''
                {...register('introduction', {
                  required: REQUIRE_ERROR_MSG,
                })}
              />
              {errors.introduction && (
                <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.introduction.message}</p>
              )}
            </div>
            <Typography variant='small' className='mt-8 mb-2'>
              가입 힌트를 입력해주세요.
            </Typography>
            <div>
              <Input
                size='md'
                label='가입 힌트'
                className='w-full !text-sm !bg-gray-100 !border-none focus:!bg-white focus:shadow-md'
                containerProps={{ className: 'max-w-md' }}
                crossOrigin=''
                labelProps={{
                  className: 'hidden',
                }}
                placeholder='예: 그룹의 공식 SNS 계정 아이디를 입력해주세요.'
                {...register('entranceHint', {
                  required: REQUIRE_ERROR_MSG,
                })}
              />
              {errors.entranceHint && (
                <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.entranceHint.message}</p>
              )}
            </div>
            <Typography variant='small' className='mt-4 mb-2'>
              가입을 위한 정답 코드를 입력해주세요.
            </Typography>
            <div>
              <Input
                size='md'
                label='비밀번호'
                className='w-full !text-sm !bg-gray-100 !border-none focus:!bg-white focus:shadow-md'
                containerProps={{ className: 'max-w-md' }}
                crossOrigin=''
                labelProps={{
                  className: 'hidden',
                }}
                placeholder='예: wekiki1234'
                {...register('entrancePassword', {
                  required: REQUIRE_ERROR_MSG,
                })}
              />
              {errors.entrancePassword && (
                <p className='text-xs mt-1 mx-1 flex items-center text-error'>{errors.entrancePassword.message}</p>
              )}
            </div>
            <div className='text-right max-w-xl'>
              <Button ripple={false} type='submit'>
                확인
              </Button>
            </div>
          </form>
        ) : (
          <div className='text-right max-w-xl'>
            <Button ripple={false} onClick={onNextStep}>
              확인
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupCreateSearchSetting;
