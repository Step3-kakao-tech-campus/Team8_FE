import React from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div className='mx-auto mt-[59px] pt-20 pb-12'>
      <Outlet />
    </div>
  );
};

export default PageLayout;
