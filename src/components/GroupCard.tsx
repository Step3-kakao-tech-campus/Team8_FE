import React from 'react';
import { Card, CardHeader, CardBody } from '@material-tailwind/react';

interface GroupCardProps {
  group: {
    groupImage: string;
    groupName: string;
  };
}

const GroupCard = ({ group }: GroupCardProps) => {
  return (
    // TODO: Card에 링크 연결 필요
    <Card className='mt-6 w-max cursor-pointer mx-auto' shadow={false}>
      <CardHeader floated={false} className='m-0'>
        <img
          src={group.groupImage}
          alt={`${group.groupName}`}
          className='object-cover w-36 h-36 hover:scale-110 duration-300'
        />
      </CardHeader>
      <CardBody className='text-center pt-4 pb-1 px-1 text-black text-sm'>
        <span>{group.groupName}</span>
      </CardBody>
    </Card>
  );
};

export default GroupCard;
