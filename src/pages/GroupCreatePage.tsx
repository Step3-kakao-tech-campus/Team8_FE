import React, { useState } from 'react';
import { Step, Stepper } from '@material-tailwind/react';
import GroupCreateNameSection from '@components/GroupCreateNameSection';
import GroupCreatePhotoSection from '@components/GroupCreatePhotoSection';
import GroupCreateNickNameSection from '@components/GroupCreateNickNameSection';
import GroupCreateCompleteSection from '@components/GroupCreateCompleteSection';

const GroupCreatePage = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  const groupCreateSections = {
    1: <GroupCreateNameSection onNextStep={() => setCurrentStep(2)} />,
    2: <GroupCreatePhotoSection onNextStep={() => setCurrentStep(3)} />,
    3: <GroupCreateNickNameSection onNextStep={() => setCurrentStep(4)} />,
    4: <GroupCreateCompleteSection />,
  };

  return (
    <div className='flex flex-col min-h-screen pt-20'>
      <Stepper className='w-40 mb-14 cursor-pointer' activeStep={currentStep - 1}>
        {Object.keys(groupCreateSections).map((step) => (
          <Step
            key={step}
            className='w-6 h-6 text-xs bg-gray-100'
            onClick={() => setCurrentStep(parseInt(step, 10) as 1 | 2 | 3 | 4)}
          >
            {step}
          </Step>
        ))}
      </Stepper>
      {groupCreateSections[currentStep]}
    </div>
  );
};

export default GroupCreatePage;
