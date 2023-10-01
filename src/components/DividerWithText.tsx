import React from 'react';

interface DividerWithTextProps {
  children: React.ReactNode;
}

const DividerWithText = ({ children }: DividerWithTextProps) => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 flex items-center'>
        <div className='w-full border-t border-gray-200' />
      </div>
      <div className='relative flex justify-center text-sm leading-6'>
        <span className='bg-white px-2 text-gray-500'>{children}</span>
      </div>
    </div>
  );
};

export default DividerWithText;
