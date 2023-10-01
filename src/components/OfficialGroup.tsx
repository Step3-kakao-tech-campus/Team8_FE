import React from 'react';
import { Carousel } from '@material-tailwind/react';

const OfficialGroup = () => {
  const dummy = [
    {
      groupId: 1,
      groupName: '부산대학교',
      groupImage: 'https://swedu.pusan.ac.kr/sites/swedu/atchmnfl_mngr/imageSlide/4829/temp_1669337402976100.jpg',
    },
    {
      groupId: 1,
      groupName: '공식 그룹 2',
      groupImage:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    {
      groupId: 1,
      groupName: '공식 그룹 3',
      groupImage:
        'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
    },
  ];
  return (
    <Carousel className='rounded-xl max-w-[768px]' loop>
      {dummy.map((group) => (
        <div className='relative h-full w-full'>
          <img src={group.groupImage} alt={group.groupName} className='w-full h-40 object-cover mx-auto' />
          <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/50'>
            <div className='w-3/4 text-center'>
              <p className='text-white'>{group.groupName}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default OfficialGroup;
