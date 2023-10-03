import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './tailwind.css';

import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MyPage from '@pages/MyPage';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/signUp',
        element: <SignUpPage />,
      },
      {
        path: '/myPage',
        element: <MyPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
