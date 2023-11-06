import { checkInviteCodeFn } from '@apis/groupApi';
import { GROUP_KEYS } from '@constants/queryKeys';
import { Spinner, Typography } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface InviteFetcherProps {
  inviteCode: string;
}

const InviteFetcher = ({ inviteCode }: InviteFetcherProps) => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: GROUP_KEYS.checkGroupInviteCode({ inviteCode }),
    queryFn: () => checkInviteCodeFn(inviteCode),
  });

  if (data) {
    const { groupId } = data;
    navigate(`/${groupId}/join`, { replace: true });
  }
  return (
    <>
      <Typography variant='h5'>잠시만 기다려주세요.</Typography>
      <Spinner className='h-12 w-12' />
    </>
  );
};

export default InviteFetcher;
