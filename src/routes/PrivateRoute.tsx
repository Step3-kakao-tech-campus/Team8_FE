import React, { ReactNode } from 'react';
import isLoggedInState from '@recoil/atoms/auth';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  if (!isLoggedIn) {
    return <Navigate to='/login' replace />;
  }
  return children;
};

export default PrivateRoute;
