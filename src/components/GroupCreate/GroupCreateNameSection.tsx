import React, { useState } from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';

interface GroupCreateNameSectionProps {
  onNextStep: () => void;
  setGroupInfo: ({ groupName }: { groupName: string }) => void;
}

const GroupCreateNameSection = ({ onNextStep, setGroupInfo }: GroupCreateNameSectionProps) => {
  const [inputCount, setInputCount] = useState(12);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCount(12 - e.target.value.length);
    setGroupInfo({ groupName: e.target.value });
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
        <Typography variant='lead'>
          새 그룹의 <strong>이름</strong>을 입력해주세요.
        </Typography>
        <Typography variant='paragraph'>그룹 이름은 최대 12자까지 가능합니다.</Typography>
      </div>
      <div className='flex gap-2 flex-wrap'>
        <Input
          size='md'
          label='그룹 이름'
          containerProps={{ className: 'max-w-md' }}
          crossOrigin=''
          icon={inputCount > 0 && <span className='text-sm'>{inputCount}</span>}
          onChange={onInputChange}
          error={inputCount < 0}
        />
        <Button onClick={handleNextStep}>확인</Button>
      </div>
      {inputCount < 0 && <p className='text-red-500 !mt-3 px-2 text-sm'>조건을 확인해주세요.</p>}
    </section>
  );
};

export default GroupCreateNameSection;
