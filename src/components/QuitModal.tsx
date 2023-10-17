import React from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';

interface QuitModalProps {
  group?: string;
  isOpen: boolean;
  onClick: () => void;
}

const QuitModal = ({ group, isOpen, onClick }: QuitModalProps) => {
  return (
    <Dialog open={isOpen} handler={onClick} size='xs'>
      <DialogHeader className='text-xl'>{group}</DialogHeader>
      <DialogBody className='text-black font-normal'>
        정말 <span className='font-bold text-red-600'>[{group}]</span> 그룹을 탈퇴하시겠습니까?
      </DialogBody>
      <DialogFooter>
        <Button variant='text' ripple={false} color='red' onClick={onClick} className='mr-1'>
          확인
        </Button>
        <Button variant='filled' ripple={false} onClick={onClick}>
          취소
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default QuitModal;
