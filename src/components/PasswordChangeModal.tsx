import React from 'react';
import { Button, Input, Dialog, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';

interface PasswordChangeModalProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const PasswordChangeModal: React.FC<PasswordChangeModalProps> = ({ isOpen, handleOpen }: PasswordChangeModalProps) => {
  // TODO: 비밀번호 변경 기능 구현 -> 비밀번호 변경 전 사용자 인증 과정 등 필요
  return (
    <Dialog size='xs' open={isOpen} handler={handleOpen} className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full max-w-[24rem]'>
        <CardBody className='flex flex-col gap-4 text-black'>
          <div className='pb-2'>
            <Typography variant='h6' className='text-center mb-1'>
              변경할 비밀번호를 입력해주세요.
            </Typography>
            <Typography variant='small' className='text-center text-xs'>
              비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.
            </Typography>
          </div>
          <Input type='password' label='비밀번호' size='lg' crossOrigin={undefined} />
          <Input type='password' label='비밀번호 확인' size='lg' crossOrigin={undefined} />
        </CardBody>
        <CardFooter className='pt-0'>
          <Button variant='gradient' onClick={handleOpen} fullWidth>
            변경하기
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
};

export default PasswordChangeModal;
