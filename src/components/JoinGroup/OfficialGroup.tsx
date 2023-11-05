import React from 'react';
import DividerWithText from '@components/Common/DividerWithText';
import { Button, Input } from '@material-tailwind/react';

const OfficialGroup = () => {
  return (
    <div className='w-full'>
      <section className='w-full text-center'>
        <DividerWithText>학교 인증을 진행해주세요.</DividerWithText>
        <div className='relative flex w-full mt-6'>
          <Input
            type='text'
            label='학교 이메일 입력'
            className='pr-20'
            containerProps={{
              className: 'min-w-0',
            }}
            crossOrigin=''
          />
          <Button size='sm' className='!absolute right-1 top-1 rounded'>
            인증번호 받기
          </Button>
        </div>
        <div className='relative flex w-full mt-6'>
          <Input
            type='text'
            label='인증번호 입력'
            className='pr-20'
            containerProps={{
              className: 'min-w-0',
            }}
            crossOrigin=''
          />
          <Button size='sm' className='!absolute right-1 top-1 rounded'>
            확인
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OfficialGroup;
