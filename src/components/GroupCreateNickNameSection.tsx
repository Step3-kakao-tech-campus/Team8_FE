import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';

const GroupCreateNickNameSection = () => {
  return (
    <section className='space-y-8'>
      <div>
        <Typography variant='lead'>
          새 그룹의 <strong>닉네임</strong>을 입력해주세요.
        </Typography>
        <Typography variant='paragraph'>
          닉네임은 2자 이상 16자 이하, 영어 또는 숫자 또는 한글로 구성해주세요.
        </Typography>
      </div>
      <div className='flex gap-2 flex-wrap'>
        <Input size='lg' containerProps={{ className: 'max-w-md' }} crossOrigin='' icon={16} />
        <Button>확인</Button>
      </div>
    </section>
  );
};

export default GroupCreateNickNameSection;
