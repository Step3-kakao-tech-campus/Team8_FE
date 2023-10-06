import React from 'react';
import { Button, Input } from '@material-tailwind/react';
import GroupList from '@components/GroupList';
import { unOfficialGroupDummyData } from '@dummy/group';

const MyPage = () => {
  return (
    <div className='max-w-3xl min-w-max mx-auto my-32'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        마이페이지
      </h1>
      <div className='mt-20 p-4'>
        <div className='flex items-baseline'>
          <span className='font-extrabold w-40'>대표 닉네임</span>
          <div className='flex items-center'>
            <Input
              type='text'
              label='대표 닉네임'
              crossOrigin={undefined}
              placeholder='대표 닉네임'
              className='!border text-gray-900 rounded-sm placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900'
              labelProps={{
                className: 'hidden',
              }}
              containerProps={{ className: 'min-w-[100px]' }}
            />
            <Button
              variant='outlined'
              color='gray'
              className='ml-2 rounded-sm font-nanum h-9 w-28 p-1 whitespace-nowrap'
            >
              변경하기
            </Button>
          </div>
        </div>
        <div className='flex items-baseline mt-10'>
          <span className='font-extrabold w-40'>비밀번호 변경</span>
          <Button variant='outlined' color='gray' className='rounded-sm font-nanum h-9 w-20 p-1 whitespace-nowrap'>
            바로가기
          </Button>
          <p className='text-xs text-gray-700 ml-4'>카카오톡 간편 회원은 지원하지 않는 기능입니다.</p>
        </div>
        <div className='flex items-baseline mt-10 mb-10'>
          <span className='font-extrabold w-40'>내 그룹 보기</span>
          <p className='text-xs text-gray-700'>프로필을 누르면 그룹으로 이동합니다.</p>
        </div>
        <GroupList groups={unOfficialGroupDummyData} />
      </div>
    </div>
  );
};

export default MyPage;
