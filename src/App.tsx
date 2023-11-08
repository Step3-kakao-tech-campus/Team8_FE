import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@material-tailwind/react';
import { queryClient } from '@apis/queryClient';
import { useRecoilValue } from 'recoil';
import tokenState from '@recoil/atoms/auth';
import { instance } from '@apis/axios';

const App = () => {
  const token = useRecoilValue(tokenState);

  instance.defaults.headers.common.Authorization = token;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
