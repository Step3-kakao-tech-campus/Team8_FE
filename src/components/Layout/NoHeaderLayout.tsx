import React from 'react';
import ErrorBoundary from '@components/Error/ErrorBoundary';
import ErrorFallback from '@components/Error/ErrorFallback';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@components/Common/ScrollToTop';

const NoHeaderLayout = () => {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <ScrollToTop />
      <div className='max-w-3xl min-w-max mx-auto mt-[59px] pt-20 pb-12'>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default NoHeaderLayout;
