import React from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Alert, Input } from '@material-tailwind/react';
import { MdContentCopy, MdClear } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { GROUP_KEYS } from '@constants/queryKeys';
import { getInviteCodeFn } from '@apis/groupApi';
import useAlert from '@hooks/useAlert';

interface InviteModalProps {
  isOpen: boolean;
  onModalClick: () => void;
  groupId: string;
}

const InviteModal = ({ isOpen, onModalClick, groupId }: InviteModalProps) => {
  const numGroupId = Number(groupId);
  const { isOpen: isAlertOpen, setIsOpen: setIsAlertOpen } = useAlert();
  const { isOpen: isErrorAlertOpen, setIsOpen: setIsErrorAlertOpen } = useAlert();
  const { data } = useQuery({
    queryKey: GROUP_KEYS.groupInviteCode({ groupId: numGroupId }),
    queryFn: () => getInviteCodeFn(numGroupId),
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${process.env.REACT_APP_API_URL}/invite/${data?.inviteCode}`);
      setIsAlertOpen(true);
    } catch {
      setIsErrorAlertOpen(true);
    }
  };

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
          className='outline-none cursor-pointer'
          label='초대 링크'
          value={`${process.env.REACT_APP_API_URL}/invite/${data?.inviteCode}`}
          size='lg'
          readOnly
          crossOrigin=''
          icon={<MdContentCopy onClick={handleCopy} className='cursor-pointer' />}
          onClick={handleCopy}
        />
      </DialogBody>
      <DialogFooter>
        {isAlertOpen || isErrorAlertOpen ? (
          <>
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
            <Alert
              className='py-3 font-semibold'
              open={isErrorAlertOpen}
              animate={{
                mount: { y: 0 },
                unmount: { y: 100 },
              }}
            >
              죄송합니다. 다시 시도해주세요.
            </Alert>
          </>
        ) : (
          <Button variant='filled' className='h-12' ripple={false} onClick={onModalClick}>
            확인
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default InviteModal;
