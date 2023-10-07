import React, { useState } from 'react';
import GroupCreateNameSection from '@components/GroupCreateNameSection';
import GroupCreatePhotoSection from '@components/GroupCreatePhotoSection';

const GroupCreatePage = () => {
  const [currentStep] = useState<1 | 2>(1);

  const groupCreateSections = {
    1: <GroupCreateNameSection />,
    2: <GroupCreatePhotoSection />,
  };

  return (
    <div className='max-w-3xl min-w-max m-auto flex flex-col min-h-screen py-60'>
      {groupCreateSections[currentStep]}
    </div>
  );
};

export default GroupCreatePage;
