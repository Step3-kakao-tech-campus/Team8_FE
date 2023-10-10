import React from 'react';
import { Button, Input, Typography } from '@material-tailwind/react';
import { MdContentCopy } from 'react-icons/md';

const GroupCreateCompleteSection = () => {
  const inviteCode = 'https://www.dfdasdf.ffdda.com/ffaefdfdasdf';

  const handleCopyClipBoard = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead' className='font-nanum'>
          그룹 생성이 <strong>완료</strong>되었습니다!
        </Typography>
        <Typography variant='paragraph' className='font-nanum'>
          초대 링크를 통해 그룹원을 초대해보세요.
        </Typography>
      </div>
      <Input
        className='truncate outline-none font-nanum'
        label='초대 링크'
        value={inviteCode}
        size='lg'
        readOnly
        crossOrigin=''
        icon={<MdContentCopy onClick={() => handleCopyClipBoard(inviteCode)} />}
        onClick={() => handleCopyClipBoard(inviteCode)}
      />
      <div className='flex justify-end'>
        <Button className='font-nanum'>시작하기</Button>
      </div>
    </section>
  );
};

export default GroupCreateCompleteSection;
