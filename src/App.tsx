import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@material-tailwind/react';
import { queryClient } from '@apis/queryClient';
import ScrollToTop from '@components/Common/ScrollToTop';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ScrollToTop />
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
