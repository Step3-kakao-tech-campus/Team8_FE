import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import { MdContentCopy } from 'react-icons/md';

const GroupCreateCompleteSection = () => {
  const inviteCode = 'https://www.dfdasdf.ffdda.com/ffaefdfdasdf';

  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead'>
          그룹 생성이 <strong>완료</strong>되었습니다!
        </Typography>
        <Typography variant='paragraph'>초대 링크를 통해 그룹원을 초대해보세요.</Typography>
      </div>
      <Input className='truncate' value={inviteCode} size='lg' readOnly crossOrigin='' icon={<MdContentCopy />} />
      <div className='flex justify-end'>
        <Button>시작하기</Button>
      </div>
    </section>
  );
};

export default GroupCreateCompleteSection;
