import React from 'react';
import { Carousel } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Group } from '@apis/dto';

const OfficialGroup = ({ officialGroups }: { officialGroups: Group[] }) => {
  return (
    <Carousel className='rounded-xl max-w-[768px]' loop>
      {officialGroups.map((group) => (
        <Link to={`/${group.groupId}/${encodeURIComponent(group.groupName)}`} key={uuidv4()}>
          <div key={group.groupId} className='relative h-full w-full'>
            <img src={group.groupImage} alt={group.groupName} className='w-full h-40 object-contain mx-auto' />
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
