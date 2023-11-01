import React from 'react';
import { Card, CardHeader, CardBody } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

interface GroupCardProps {
  group: {
    groupId: number;
    groupImage: string;
    groupName: string;
  };
}

const GroupCard = ({ group }: GroupCardProps) => {
  return (
    <Link to={`/${group.groupId}/${group.groupName}`}>
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
    </Link>
  );
};

export default GroupCard;
