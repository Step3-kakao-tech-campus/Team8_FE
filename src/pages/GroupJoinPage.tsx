import React, { useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Alert, Button, Typography } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import { GROUP_KEYS } from '@constants/queryKeys';
import { getGroupInfoFn } from '@apis/groupApi';
import Logo from '@assets/images/logo/logo.svg';
import OfficialGroup from '@components/JoinGroup/OfficialGroup';
import UnOfficialOpenedGroup from '@components/JoinGroup/UnOfficialOpenedGroup';
import UnOfficialClosedGroup from '@components/JoinGroup/UnOfficialClosedGroup';
import useAlert from '@hooks/useAlert';

const GroupJoinPage = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const { state } = useLocation();
  const numGroupId = Number(groupId);
  const [isImgError, setImageError] = useState<boolean>(false);
  const { isOpen: isRegisteredAlertOpen, setIsOpen: setIsRegisteredAlertOpen } = useAlert();
  const { data, isLoading } = useQuery({
    queryKey: GROUP_KEYS.groupInfo({ groupId: numGroupId }),
    queryFn: () => getGroupInfoFn(numGroupId),
  });

  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = Logo;
    setImageError(true);
  };
  const handleIsRegisteredAlertOpen = () => {
    setIsRegisteredAlertOpen((prev) => !prev);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { groupName, groupImage, introduction, groupType, created_at: createdAt, memberCount } = data;
  return (
    <section className='max-w-fit mx-auto'>
      <Alert
        className='flex justify-between items-center py-3 font-semibold bg-gray-200 text-gray-600'
        open={isRegisteredAlertOpen}
        action={
          <Button
            ripple={false}
            variant='text'
            className='p-1 text-xs text-gray-600'
            onClick={() => navigate(`/${groupId}/${data.groupName}`)}
          >
            메인페이지로
          </Button>
        }
        animate={{
          mount: { y: -10 },
          unmount: { y: -50 },
        }}
      >
        이미 가입된 그룹입니다.
      </Alert>
      <div className='w-full'>
        <Link to='/'>
          <TextLogo className='w-36 m-auto mb-8' data-testid='textLogo' />
        </Link>
        <Typography variant='h4' className='font-normal'>
          <span className='font-bold'>[{groupName}]</span>
          {groupType === 'un_official_closed_group' && !state
            ? '은 초대링크를 통해서만 가입할 수 있습니다.'
            : '에 가입해보세요.'}
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
        {groupType === 'un_official_opened_group' && (
          <UnOfficialOpenedGroup data={data} onIsRegisteredAlertChange={handleIsRegisteredAlertOpen} />
        )}
        {groupType === 'un_official_closed_group' && state && (
          <UnOfficialClosedGroup
            data={data}
            inviteCode={state.inviteCode}
            onIsRegisteredAlertChange={handleIsRegisteredAlertOpen}
          />
        )}
        {groupType === 'official_group' && <OfficialGroup data={data} />}
      </div>
    </section>
  );
};

export default GroupJoinPage;
