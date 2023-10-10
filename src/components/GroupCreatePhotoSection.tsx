import React from 'react';
import { MdOutlineImage } from 'react-icons/md';
import { Button, Typography } from '@material-tailwind/react';

interface onNextStepProps {
  onNextStep: () => void;
}

const GroupCreatePhotoSection = ({ onNextStep }: onNextStepProps) => {
  const handleNextStep = () => {
    // TODO: 사진 조건 체크(있는지 없는지)
    onNextStep();
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead' className='font-nanum'>
          그룹의 <strong>대표 사진</strong>을 등록해주세요.
        </Typography>
        <Typography variant='paragraph' className='font-nanum'>
          이후 그룹 설정에서 변경할 수 있습니다.
        </Typography>
      </div>
      <Button
        variant='outlined'
        className='w-full border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-0 focus:bg-gray-50 font-nanum'
      >
        <MdOutlineImage size={40} className='mx-auto text-gray-400' />
        <p className='mt-2 text-sm font-semibold text-gray-600'>Drag & drop your image here or browse</p>
      </Button>
      <div className='flex justify-between items-center'>
        <p className='text-gray-500 hover:text-gray-600 underline underline-offset-2'>다음에 하기</p>
        <Button className='font-nanum' onClick={handleNextStep}>
          확인
        </Button>
      </div>
    </section>
  );
};

export default GroupCreatePhotoSection;
