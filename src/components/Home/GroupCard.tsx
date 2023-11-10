import React, { useState } from 'react';
import { Card, CardHeader, CardBody } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Logo from '@assets/images/logo/logo.svg';

interface GroupCardProps {
  group: {
    groupId: number;
    groupImage: string;
    groupName: string;
  };
}

const GroupCard = ({ group }: GroupCardProps) => {
  const [isImgError, setImageError] = useState(false);

  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = Logo;
    setImageError(true);
  };

  return (
    <Link to={`/${group.groupId}/${group.groupName}`}>
      <Card className='mt-6 w-max cursor-pointer mx-auto' shadow={false}>
        <CardHeader floated={false} className='m-0'>
          <img
            src={group.groupImage}
            alt={`${group.groupName}`}
            onError={handleImgError}
            className={`object-cover w-36 h-36 hover:scale-110 duration-300 transition-transform ${
              isImgError ? 'opacity-10 p-10' : ''
            }`}
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
