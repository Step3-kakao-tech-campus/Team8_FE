import React from 'react';
import { Button, Input, Dialog, CardFooter, CardBody, Typography, Card } from '@material-tailwind/react';

interface PasswordFindModalProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const PasswordFindModal = ({ isOpen, handleOpen }: PasswordFindModalProps) => {
  return (
    <Dialog size='xs' open={isOpen} handler={handleOpen} className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full max-w-[24rem]'>
        <CardBody className='flex flex-col gap-4 text-black'>
          <div className='pb-2'>
            <Typography variant='h6' className='text-center mb-1'>
              비밀번호 찾기
            </Typography>
            <Typography variant='small' className='text-center text-xs'>
              가입하신 이메일로 비밀번호 재설정이 가능합니다.
            </Typography>
          </div>
          <Input type='email' label='이메일' size='lg' crossOrigin={undefined} />
        </CardBody>
        <CardFooter className='flex gap-2 pt-0'>
          <Button variant='outlined' onClick={handleOpen} fullWidth>
            취소
          </Button>
          <Button variant='gradient' onClick={handleOpen} fullWidth>
            비밀번호 재설정
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default PasswordFindModal;
