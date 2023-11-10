import React from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { quitGroupFn } from '@apis/groupApi';

interface GroupQuitModalProps {
  groupId: string;
  groupName: string;
  isOpen: boolean;
  onClick: () => void;
}

const GroupQuitModal = ({ groupId, groupName, isOpen, onClick }: GroupQuitModalProps) => {
  const navigate = useNavigate();
  const { mutate: quitGroupMutate } = useMutation({
    mutationFn: () => quitGroupFn(groupId),
    onSuccess: () => {
      navigate('/');
      onClick();
    },
  });

  const handleQuitClick = () => {
    quitGroupMutate();
  };
  return (
    <Dialog open={isOpen} handler={onClick} size='xs'>
      <DialogHeader className='justify-center text-lg'>{groupName}</DialogHeader>
      <DialogBody className='text-center text-black font-normal'>
        정말 <span className='font-bold text-red-600'>[{groupName}]</span> 그룹을 탈퇴하시겠습니까?
      </DialogBody>
      <DialogFooter>
        <Button variant='text' ripple={false} color='red' onClick={handleQuitClick} className='mr-1'>
          확인
        </Button>
        <Button variant='filled' ripple={false} onClick={onClick}>
          취소
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default GroupQuitModal;
