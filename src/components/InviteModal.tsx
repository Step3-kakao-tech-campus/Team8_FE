import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Alert } from '@material-tailwind/react';
import { MdContentCopy, MdClear } from 'react-icons/md';

interface InviteModalProps {
  code: string;
  isOpen: boolean;
  onModalClick: () => void;
}

const InviteModal = ({ code, isOpen, onModalClick }: InviteModalProps) => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
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
      <DialogHeader className='flex flex-col gap-2'>
        <span className='text-lg'>그룹원을 초대해보세요.</span>
        <span className='text-sm text-gray-600 font-normal'>클릭하여 링크 복사</span>
      </DialogHeader>
      <DialogBody className='flex'>
        <p className='px-4 py-1 bg-blue-gray-50 text-black overflow-auto'>{code}</p>
        <Button
          className='bg-blue-gray-50 text-xl text-black rounded-none shadow-none hover:shadow-none'
          onClick={handleCopy}
        >
          <MdContentCopy />
        </Button>
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
          <Button className='text-base' variant='gradient' onClick={onModalClick}>
            <span>확인</span>
          </Button>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default InviteModal;
