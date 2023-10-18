import React from 'react';
import { Typography, Input, Button, Radio } from '@material-tailwind/react';

interface GroupCreateSearchSettingProps {
  onNextStep: () => void;
}

const GroupCreateSearchSetting = ({ onNextStep }: GroupCreateSearchSettingProps) => {
  const [isPublic, setIsPublic] = React.useState(false);

  const handleNextStep = () => {
    // TODO: 필수 입력 사항 체크
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
      <form>
        <div className='flex gap-2 flex-wrap'>
          <Radio name='type' label={<strong>공개</strong>} onClick={() => setIsPublic(true)} crossOrigin={undefined} />
          <Radio
            name='type'
            label={<strong>비공개</strong>}
            onClick={() => setIsPublic(false)}
            defaultChecked
            crossOrigin={undefined}
          />
        </div>
        {isPublic && (
          <div className='p-3'>
            <Typography variant='small' className='mb-2'>
              <strong>한줄 소개글</strong>을 입력해주세요. 검색 결과에 함께 노출됩니다.
            </Typography>
            <Input size='md' label='소개글' containerProps={{ className: 'max-w-md' }} crossOrigin='' />
            <Typography variant='small' className='mt-8 mb-2'>
              가입 힌트를 입력해주세요.
            </Typography>
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
            />
            <Typography variant='small' className='mt-4 mb-2'>
              가입을 위한 정답 코드를 입력해주세요.
            </Typography>
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
            />
          </div>
        )}
        <div className='text-right max-w-xl'>
          <Button onClick={handleNextStep}>확인</Button>
        </div>
      </form>
    </section>
  );
};

export default GroupCreateSearchSetting;
