import React, { useState } from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { Button, ButtonGroup } from '@material-tailwind/react';

const AddPostButton = () => {
  const [isSplit, setIsSplit] = useState(false);

  const handleButtonClick = () => {
    setIsSplit(!isSplit);
  };

  return (
    <div className='flex items-center justify-center mb-4 '>
      <Button
        fullWidth
        className={`h-10 bg-gray-50 text-white hover:text-gray-400 shadow-none rounded-sm transition-all duration-300 ease-in-out p-0 ${
          isSplit ? 'w-0' : 'w-full'
        }`}
        onClick={handleButtonClick}
      >
        <MdAddCircleOutline size={22} className='mx-auto' />
      </Button>
      {isSplit && (
        <ButtonGroup color='white' fullWidth className='shadow-none border-gray-300 rounded-sm h-10'>
          <Button className='bg-gray-50 text-gray-500 rounded-sm'>다음 목차로 추가</Button>
          <Button className='bg-gray-50 text-gray-500 rounded-sm'>하위 목차로 추가</Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default AddPostButton;
