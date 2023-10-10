import React from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <div className='2xl:mx-20 mt-[59px] pt-20 pb-12'>
      <Outlet />
    </div>
  );
};

export default PageLayout;
