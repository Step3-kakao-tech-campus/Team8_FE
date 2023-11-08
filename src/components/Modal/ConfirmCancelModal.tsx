import React from 'react';
import { Dialog, Card, CardBody, CardFooter, Button, Typography } from '@material-tailwind/react';

interface ConfirmCancelModalProps {
  isOpen: boolean;
  handleModal: () => void;
  onConfirm: () => void;
  message: string;
}

const ConfirmCancelModal = ({ isOpen, handleModal, onConfirm, message }: ConfirmCancelModalProps) => {
  return (
    <Dialog open={isOpen} handler={handleModal} size='xs' className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full max-w-[24rem]'>
        <CardBody className='flex flex-col gap-4 text-black text-center'>
          <Typography variant='h6'>{message}</Typography>
        </CardBody>
        <CardFooter className='pt-0 text-right'>
          <Button
            variant='outlined'
            ripple={false}
            size='sm'
            onClick={onConfirm}
            className='mr-1 bg-black text-white rounded'
          >
            확인
          </Button>
          <Button variant='outlined' size='sm' ripple={false} onClick={handleModal} className='rounded'>
            취소
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default ConfirmCancelModal;
