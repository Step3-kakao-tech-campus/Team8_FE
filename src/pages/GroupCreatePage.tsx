import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';

const GroupCreatePage = () => {
  return (
    <div className='max-w-3xl min-w-max m-auto flex flex-col min-h-screen py-60'>
      <section className='space-y-8'>
        <div>
          <Typography variant='lead'>
            새 그룹의 <strong>이름</strong>을 입력해주세요.
          </Typography>
          <Typography variant='paragraph'>20자 이내의 그룹 이름을 자유롭게 입력해주세요.</Typography>
        </div>
        <div className='flex gap-2 flex-wrap'>
          <Input size='lg' containerProps={{ className: 'w-96' }} crossOrigin='' icon={20} />
          <Button>확인</Button>
        </div>
      </section>
    </div>
  );
};

export default GroupCreatePage;
