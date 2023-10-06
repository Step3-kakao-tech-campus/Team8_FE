import React, { useState } from 'react';
import GroupCreateNameSection from '@components/GroupCreateNameSection';

const GroupCreatePage = () => {
  const [currentStep] = useState<1>(1);

  const groupCreateSections = {
    1: <GroupCreateNameSection />,
  };

  return (
    <div className='max-w-3xl min-w-max m-auto flex flex-col min-h-screen py-60'>
      {groupCreateSections[currentStep]}
    </div>
  );
};

export default GroupCreatePage;
