import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Group } from '@apis/dto';
import GroupCard from './GroupCard';

const GroupList = ({ groups }: { groups: Group[] }) => {
  return (
    <div className='grid grid-cols-4 gap-4 p-0'>
      {groups.map((item) => (
        <GroupCard key={uuidv4()} group={item} />
      ))}
    </div>
  );
};

export default React.memo(GroupList);
