import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { officialGroupDummyData } from '@dummy/group';
import { Link } from 'react-router-dom';

const OfficialGroup = () => {
  return (
    <Carousel className='rounded-xl max-w-[768px]' loop>
      {officialGroupDummyData.map((group) => (
        <Link to={`/${group.groupName}`} key={group.groupId}>
          <div key={group.groupId} className='relative h-full w-full'>
            <img src={group.groupImage} alt={group.groupName} className='w-full h-40 object-cover mx-auto' />
            <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/50'>
              <div className='w-3/4 text-center'>
                <p className='text-white'>{group.groupName}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
};

export default OfficialGroup;
