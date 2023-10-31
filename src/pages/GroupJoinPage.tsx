import React from 'react';

import { groupInfoDummyData, groupJoinPassword } from '@dummy/group';
import { Button, Input, Typography } from '@material-tailwind/react';
import DividerWithText from '@components/Common/DividerWithText';
import { useNavigate } from 'react-router-dom';

const GroupJoinPage = () => {
  const data = groupInfoDummyData;
  const [entranceCode, setEntranceCode] = React.useState('');
  const navigate = useNavigate();
  const [isWrong, setIsWrong] = React.useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setEntranceCode(event.target.value);
  const handleOnSubmit = () => {
    if (entranceCode === groupJoinPassword) {
      // TODO: 가입 완료 API 보내기
      navigate(`/${data.groupName}`);
    } else {
      setIsWrong(true);
    }
  };

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
              onChange={handleOnChange}
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
              onClick={handleOnSubmit}
            >
              가입하기
            </Button>
          </div>
          {isWrong && <p className='text-error text-xs mt-2'>정답이 틀렸어요. 다시 입력해주세요.</p>}
        </form>
      </div>
    </section>
  );
};

export default GroupJoinPage;