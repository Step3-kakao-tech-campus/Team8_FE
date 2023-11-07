import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className='max-w-3xl min-w-max mx-auto mt-[59px] pt-20 pb-12'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
