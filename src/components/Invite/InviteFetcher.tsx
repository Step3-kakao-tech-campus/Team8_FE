import React, { useEffect } from 'react';
import { checkInviteCodeFn } from '@apis/groupApi';
import { GROUP_KEYS } from '@constants/queryKeys';
import { Spinner, Typography } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import isLoggedInState from '@recoil/atoms/auth';

interface InviteFetcherProps {
  inviteCode: string;
}

const InviteFetcher = ({ inviteCode }: InviteFetcherProps) => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const { data, isLoading } = useQuery({
    queryKey: GROUP_KEYS.checkGroupInviteCode({ inviteCode }),
    queryFn: () => checkInviteCodeFn(inviteCode),
  });

  useEffect(() => {
    if (!isLoading && data) {
      const { groupId } = data;
      if (isLoggedIn) {
        navigate(`/${groupId}/join`, { replace: true, state: { inviteCode } });
      }
    }
  }, [isLoading, data, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Typography variant='h5'>잠시만 기다려주세요.</Typography>
      <Spinner className='h-12 w-12' />
    </>
  );
};

export default InviteFetcher;
