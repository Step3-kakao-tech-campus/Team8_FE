import React, { useState } from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';

interface onNextStepProps {
  onNextStep: () => void;
}

const GroupCreateNameSection = ({ onNextStep }: onNextStepProps) => {
  const [inputCount, setInputCount] = useState(12);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(12 - e.target.value.length);
  };
  const handleNextStep = () => {
    // TODO: 그룹 이름 중복 체크, 그룹 이름 길이 체크, 그 외 조건 체크
    if (inputCount >= 0) {
      onNextStep();
    }
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead' className='font-nanum'>
          새 그룹의 <strong>이름</strong>을 입력해주세요.
        </Typography>
        <Typography variant='paragraph' className='font-nanum'>
          그룹 이름은 최대 12자까지 가능합니다.
        </Typography>
      </div>
      <div className='flex gap-2 flex-wrap'>
        <Input
          size='lg'
          label='그룹 이름'
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
      {inputCount < 0 && <p className='text-red-500 !mt-3 px-2 text-sm'>조건을 확인해주세요.</p>}
    </section>
  );
};

export default GroupCreateNameSection;
