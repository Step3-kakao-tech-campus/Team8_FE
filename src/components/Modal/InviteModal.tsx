import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Alert, Input } from '@material-tailwind/react';
import { MdContentCopy, MdClear } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { GROUP_KEYS } from '@constants/queryKeys';
import { getInviteCodeFn } from '@apis/groupApi';

interface InviteModalProps {
  isOpen: boolean;
  onModalClick: () => void;
  groupId: string;
}

const InviteModal = ({ isOpen, onModalClick, groupId }: InviteModalProps) => {
  const numGroupId = Number(groupId);
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
  const { data } = useQuery({
    queryKey: GROUP_KEYS.groupInviteCode({ groupId: numGroupId }),
    queryFn: () => getInviteCodeFn(numGroupId),
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data?.inviteCode);
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
    <Dialog open={isOpen} handler={onModalClick}>
      <button type='button' className='absolute top-4 right-4' onClick={onModalClick}>
        <MdClear className='text-3xl text-black' />
      </button>
      <DialogHeader className='flex-col gap-2'>
        <p className='text-lg'>그룹원을 초대해보세요.</p>
        <p className='text-sm text-gray-600 font-normal'>클릭하여 링크 복사</p>
      </DialogHeader>
      <DialogBody className='flex'>
        <Input
          className='truncate outline-none cursor-pointer'
          label='초대 링크'
          value={data?.inviteCode}
          size='lg'
          readOnly
          crossOrigin=''
          icon={<MdContentCopy onClick={handleCopy} />}
          onClick={handleCopy}
        />
      </DialogBody>
      <DialogFooter>
        {isAlertOpen ? (
          <Alert
            className='py-3 font-semibold'
            open={isAlertOpen}
            animate={{
              mount: { y: 0 },
              unmount: { y: 100 },
            }}
          >
            초대코드가 복사되었습니다.
          </Alert>
        ) : (
          <Button variant='filled' ripple={false} onClick={onModalClick}>
            확인
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default InviteModal;
