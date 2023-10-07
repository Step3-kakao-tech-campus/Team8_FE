import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './tailwind.css';

import GroupMainPage from '@pages/GroupMainPage';
import GroupMyPage from '@pages/GroupMyPage';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MyPage from '@pages/MyPage';
import SearchResultPage from '@pages/SearchResultPage';
import GroupSearchResultPage from '@pages/GroupSearchResultPage';

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
        path: '/:groupName',
        element: <GroupMainPage />,
      },
      {
        path: '/:groupName/myPage',
        element: <GroupMyPage />,
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
      {
        path: '/:groupName/search',
        element: <SearchResultPage />,
      },
      {
        path: '/search/group',
        element: <GroupSearchResultPage />,
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
