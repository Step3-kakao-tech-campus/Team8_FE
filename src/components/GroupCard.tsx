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
    <Card className='mt-6 w-32' shadow={false}>
      <CardHeader floated={false} className='m-0'>
        <img src={group.groupImage} alt={`${group.groupName}`} className='object-cover w-full h-32' />
      </CardHeader>
      <CardBody className='text-center pt-4 pb-1 px-1 text-black text-sm'>
        <span>{group.groupName}</span>
      </CardBody>
    </Card>
  );
};

export default GroupCard;
