import React from 'react';
import { useParams } from 'react-router-dom';
import InviteFetcher from '@components/Invite/InviteFetcher';
import ErrorBoundary from '@components/Error/ErrorBoundary';
import InviteErrorFallback from '@components/Error/InviteErrorFallback';

const InviteProcessPage = () => {
  const { inviteCode } = useParams() as { inviteCode: string };

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8'>
      <ErrorBoundary fallback={InviteErrorFallback}>
        <InviteFetcher inviteCode={inviteCode} />
      </ErrorBoundary>
    </div>
  );
};

export default InviteProcessPage;
