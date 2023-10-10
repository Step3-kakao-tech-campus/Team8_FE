import React, { useState } from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';

interface onNextStepProps {
  onNextStep: () => void;
}

const GroupCreateNickNameSection = ({ onNextStep }: onNextStepProps) => {
  const [inputCount, setInputCount] = useState(8);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(8 - e.target.value.length);
  };
  const handleNextStep = () => {
    // TODO: 닉네임 조건 체크
    if (inputCount >= 0) {
      onNextStep();
    }
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead' className='font-nanum'>
          새 그룹에서 사용할 <strong>닉네임</strong>을 입력해주세요.
        </Typography>
        <Typography variant='paragraph' className='font-nanum'>
          닉네임은 2자 이상 8자 이하, 영어 또는 숫자 또는 한글로 구성해주세요.
        </Typography>
      </div>
      <div className='flex gap-2 flex-wrap'>
        <Input
          size='lg'
          label='닉네임'
          containerProps={{ className: 'max-w-md' }}
          crossOrigin=''
          icon={inputCount > 0 && inputCount}
          onChange={onInputChange}
          error={inputCount < 0}
        />
        <Button className='font-nanum text-sm' onClick={handleNextStep}>
          확인
        </Button>
      </div>
      {/* TODO: 조건에 따른 안내 메세지 수정 필요 */}
      {inputCount < 0 && <p className='text-red-500 !mt-3 px-2 text-sm'>조건을 확인해주세요.</p>}
    </section>
  );
};

export default GroupCreateNickNameSection;
