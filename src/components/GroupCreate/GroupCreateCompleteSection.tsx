import React, { useEffect, useState } from 'react';
import { Alert, Button, Input, Typography } from '@material-tailwind/react';
import { MdContentCopy } from 'react-icons/md';
import { inviteCodeDummyData } from '@dummy/group';
import { useNavigate } from 'react-router-dom';

interface GroupCreateCompleteSectionProps {
  groupName: string;
}

const GroupCreateCompleteSection = ({ groupName }: GroupCreateCompleteSectionProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCodeDummyData);
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
          <strong>{groupName}</strong> 그룹이 생성되었습니다!
        </Typography>
        <Typography variant='paragraph'>초대 링크를 통해 그룹원을 초대해보세요.</Typography>
      </div>
      <Input
        className='truncate outline-none'
        label='초대 링크'
        value={inviteCodeDummyData}
        size='lg'
        readOnly
        crossOrigin=''
        icon={<MdContentCopy onClick={handleCopy} />}
        onClick={handleCopy}
      />
      <div className='flex justify-end'>
        <Button onClick={() => navigate(`/${groupName}`)}>시작하기</Button>
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
