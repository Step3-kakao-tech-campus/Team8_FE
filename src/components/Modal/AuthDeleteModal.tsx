import React from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { authDeleteFn } from '@apis/authApi';
import { useSetRecoilState } from 'recoil';
import tokenState from '@recoil/atoms/auth';
import { useNavigate } from 'react-router-dom';

interface AuthDeleteModalProps {
  isOpen: boolean;
  onClick: () => void;
}

const AuthDeleteModal = ({ isOpen, onClick }: AuthDeleteModalProps) => {
  const { mutate: authDelete } = useMutation({ mutationFn: authDeleteFn });
  const navigate = useNavigate();
  const setToken = useSetRecoilState(tokenState);

  const handleAuthDelete = () => {
    authDelete(undefined, {
      onSuccess: () => {
        onClick();
        setToken(null);
        navigate(`/`);
      },
    });
  };

  return (
    <Dialog open={isOpen} handler={onClick} size='xs'>
      <DialogHeader className='justify-center text-lg'>회원탈퇴</DialogHeader>
      <DialogBody className='text-center text-black font-normal'>정말 탈퇴하시겠습니까?</DialogBody>
      <DialogFooter>
        <Button variant='text' ripple={false} color='red' onClick={handleAuthDelete} className='mr-1'>
          확인
        </Button>
        <Button variant='filled' ripple={false} onClick={onClick}>
          취소
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AuthDeleteModal;
