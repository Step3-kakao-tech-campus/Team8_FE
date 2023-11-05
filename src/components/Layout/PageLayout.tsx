import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <>
      <Header />

      <div className='relative 2xl:mx-20 mt-[59px] pt-20 pb-12'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
