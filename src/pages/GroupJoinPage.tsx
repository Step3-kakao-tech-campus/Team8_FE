import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Typography } from '@material-tailwind/react';
import { GROUP_KEYS } from '@constants/queryKeys';
// import { getGroupInfoFn } from '@apis/groupApi';
import { fakeGetGroupInfoFn } from '@apis/groupApi';
import Logo from '@assets/images/logo/logo.svg';
import OfficialGroup from '@components/JoinGroup/OfficialGroup';
import UnOfficialOpenedGroup from '@components/JoinGroup/UnOfficialOpenedGroup';
import UnOfficialClosedGroup from '@components/JoinGroup/UnOfficialClosedGroup';

const GroupJoinPage = () => {
  const { groupId } = useParams() as { groupId: string };
  const [isImgError, setImageError] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: GROUP_KEYS.groupInfo({ groupId }),
    queryFn: fakeGetGroupInfoFn,
    // queryFn: () => getGroupInfoFn(groupId),
  });

  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = Logo;
    setImageError(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { groupName, groupImage, introduction, groupType, created_at: createdAt, memberCount } = data;
  return (
    <section className='max-w-fit mx-auto'>
      <div className='w-full'>
        <Typography variant='h4' className='font-normal'>
          <span className='font-bold'>[{groupName}]</span>에 가입해보세요.
        </Typography>
        <p className='mb-6 text-gray-600 text-sm'>
          {createdAt.split('T')[0]}일에 개설된 그룹이에요. 현재 {memberCount}명이 참여하고 있어요.
        </p>
      </div>
      <div className='flex flex-col gap-6 border p-10 items-center min-w-[450px]'>
        <img
          src={groupImage}
          alt='그룹 대표 이미지'
          onError={handleImgError}
          className={`object-cover w-28 h-28 rounded ${isImgError ? 'opacity-10 p-4' : ''}`}
        />
        <div className='w-full text-center'>
          <Typography variant='h6'>{groupName}</Typography>
          <p className='text-xs min-w-[400px]'>{introduction}</p>
        </div>
        {groupType === 'un_official_opened_group' && <UnOfficialOpenedGroup data={data} />}
        {groupType === 'un_official_closed_group' && <UnOfficialClosedGroup data={data} />}
        {groupType === 'official_group' && <OfficialGroup />}
      </div>
    </section>
  );
};

export default GroupJoinPage;
