import React, { useEffect, useState } from 'react';
import { Alert, Button, Input, Typography } from '@material-tailwind/react';
import { MdContentCopy } from 'react-icons/md';

const GroupCreateCompleteSection = () => {
  const inviteCode = 'https://www.dfdasdf.ffdda.com/ffaefdfdasdf';

  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
    } finally {
      setIsAlertOpen(true);
    }
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsAlertOpen(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAlertOpen]);

  return (
    <section className='space-y-10 max-w-xl'>
      <div>
        <Typography variant='lead'>
          그룹 생성이 <strong>완료</strong>되었습니다!
        </Typography>
        <Typography variant='paragraph'>초대 링크를 통해 그룹원을 초대해보세요.</Typography>
      </div>
      <Input
        className='truncate outline-none'
        label='초대 링크'
        value={inviteCode}
        size='lg'
        readOnly
        crossOrigin=''
        icon={<MdContentCopy onClick={handleCopy} />}
        onClick={handleCopy}
      />
      <div className='flex justify-end'>
        <Button>시작하기</Button>
      </div>
      {isAlertOpen && (
        <Alert
          variant='ghost'
          className='py-3 text-sm absolute top-10 max-w-3xl min-w-max mx-auto '
          open={isAlertOpen}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >
          초대코드가 복사되었습니다.
        </Alert>
      )}
    </section>
  );
};

export default GroupCreateCompleteSection;
