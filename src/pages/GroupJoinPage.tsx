import React from 'react';

import { groupInfoDummyData } from '@dummy/group';
import { Button, Input, Typography } from '@material-tailwind/react';
import DividerWithText from '@components/Common/DividerWithText';

const GroupJoinPage = () => {
  const data = groupInfoDummyData;
  const [entranceCode, setEntranceCode] = React.useState('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setEntranceCode(event.target.value);

  return (
    <section className='max-w-fit mx-auto'>
      <div className='w-full'>
        <Typography variant='h4' className='font-normal'>
          <span className='font-bold'>{data.groupName}</span>에 가입해보세요.
        </Typography>
        <p className='mb-6 text-gray-600 text-sm'>
          {data.created_at.split('T')[0]}일에 개설된 그룹이에요. 현재 {data.memberCount}명이 참여하고 있어요.
        </p>
      </div>
      <div className='flex flex-col gap-6 border p-10 items-center min-w-[450px]'>
        <img src={data.groupImage} alt='그룹 대표 이미지' className='object-cover w-28 h-28 rounded' />
        <div className='w-full text-center'>
          <Typography variant='h6'>{data.groupName}</Typography>
          <p className='text-xs min-w-[400px]'>{data.introduction}</p>
        </div>
        <div className='w-full'>
          <DividerWithText>정답을 맞추면 가입할 수 있어요.</DividerWithText>
        </div>
        <form className='w-full text-center'>
          <Typography variant='h6' className='text-sm mb-3'>
            Q. {data.entranceHint}
          </Typography>
          <div className='relative flex w-full'>
            <Input
              type='text'
              label='정답 입력'
              value={entranceCode}
              onChange={onChange}
              className='pr-20'
              containerProps={{
                className: 'min-w-0',
              }}
              crossOrigin={undefined}
            />
            <Button
              size='sm'
              color={entranceCode ? 'gray' : 'blue-gray'}
              disabled={!entranceCode}
              className='!absolute right-1 top-1 rounded'
            >
              가입하기
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GroupJoinPage;
