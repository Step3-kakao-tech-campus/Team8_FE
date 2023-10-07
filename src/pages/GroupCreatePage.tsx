import React, { useState } from 'react';
import { Step, Stepper } from '@material-tailwind/react';
import GroupCreateNameSection from '@components/GroupCreateNameSection';
import GroupCreatePhotoSection from '@components/GroupCreatePhotoSection';
import GroupCreateNickNameSection from '@components/GroupCreateNickNameSection';
import GroupCreateCompleteSection from '@components/GroupCreateCompleteSection';

const GroupCreatePage = () => {
  const [currentStep] = useState<1 | 2 | 3 | 4>(4);

  const groupCreateSections = {
    1: <GroupCreateNameSection />,
    2: <GroupCreatePhotoSection />,
    3: <GroupCreateNickNameSection />,
    4: <GroupCreateCompleteSection />,
  };

  return (
    <div className='max-w-3xl min-w-max m-auto flex flex-col min-h-screen py-40'>
      <Stepper className='w-40 mb-14' activeStep={currentStep - 1}>
        {Object.keys(groupCreateSections).map((step) => (
          <Step className='w-6 h-6 text-xs bg-gray-100'>{step}</Step>
        ))}
      </Stepper>
      {groupCreateSections[currentStep]}
    </div>
  );
};

export default GroupCreatePage;
