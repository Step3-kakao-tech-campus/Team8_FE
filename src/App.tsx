import React from 'react';
import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@material-tailwind/react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { queryClient } from '@apis/queryClient';
import ErrorBoundary from '@components/Error/ErrorBoundary';

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ErrorBoundary fallback={<div>바깥 에러바운더리</div>}>
            <Header />
            <Outlet />
            <Footer />
          </ErrorBoundary>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
