import React from 'react';
import { Outlet } from 'react-router-dom';

const NoHeaderLayout = () => {
  return (
    <div className='max-w-3xl min-w-max mx-auto mt-[59px] pt-20 pb-12'>
      <Outlet />
    </div>
  );
};

export default NoHeaderLayout;
