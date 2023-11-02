import React from 'react';
import { Button, Card, CardBody, CardFooter, Dialog } from '@material-tailwind/react';

interface PageCreateModalProps {
  page?: string;
  isOpen: boolean;
  onClick: () => void;
  handleModal: () => void;
}

const PageCreateModal = ({ page, isOpen, onClick, handleModal }: PageCreateModalProps) => {
  return (
    <Dialog open={isOpen} handler={onClick} size='xs' className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full max-w-[24rem]'>
        <CardBody className='flex flex-col gap-4 text-black text-center'>
          <p>
            <span className='font-bold'>{page}</span> 페이지를 생성합니다.
          </p>
        </CardBody>
        <CardFooter className='pt-0 text-right'>
          <Button
            variant='outlined'
            ripple={false}
            size='sm'
            onClick={onClick}
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

export default PageCreateModal;
