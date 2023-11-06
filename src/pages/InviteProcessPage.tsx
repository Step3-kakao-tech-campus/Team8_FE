import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import InviteFetcher from '@components/Invite/InviteFetcher';
import { Spinner } from '@material-tailwind/react';

const InviteProcessPage = () => {
  const { inviteCode } = useParams() as { inviteCode: string };

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-8'>
      <Suspense fallback={<Spinner className='h-12 w-12' />}>
        <InviteFetcher inviteCode={inviteCode} />
      </Suspense>
    </div>
  );
};

export default InviteProcessPage;
