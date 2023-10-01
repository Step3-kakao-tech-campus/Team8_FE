import React from 'react';
import GroupCard from './GroupCard';

interface Group {
  groupId: number;
  groupImage: string;
  groupName: string;
}

const GroupList = ({ groups }: { groups: Group[] }) => {
  return (
    <div className='grid grid-cols-4 gap-4 p-0'>
      {groups.map((item) => {
        return <GroupCard key={item.groupId} group={item} />;
      })}
    </div>
  );
};

export default GroupList;
