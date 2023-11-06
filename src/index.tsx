import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './tailwind.css';

import GroupMainPage from '@pages/GroupMainPage';
import GroupMyPage from '@pages/GroupMyPage';
import HomePage from '@pages/HomePage';
import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MyPage from '@pages/MyPage';
import MyContributePage from '@pages/MyContributePage';
import SearchResultPage from '@pages/SearchResultPage';
import GroupSearchResultPage from '@pages/GroupSearchResultPage';
import GroupCreatePage from '@pages/GroupCreatePage';
import ReportPage from '@pages/ReportPage';
import PostEditPage from '@pages/PostEditPage';
import PostHistoryPage from '@pages/PostHistoryPage';
import GroupJoinPage from '@pages/GroupJoinPage';
import KakaoLoginPage from '@pages/KakaoLoginPage';
import NotFoundPage from '@pages/NotFoundPage';
import InviteProcessPage from '@pages/InviteProcessPage';

import MainLayout from '@components/Layout/MainLayout';
import PageLayout from '@components/Layout/PageLayout';
import NoHeaderLayout from '@components/Layout/NoHeaderLayout';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/signUp',
            element: <SignUpPage />,
          },
          {
            path: '/kakaoLogin',
            element: <KakaoLoginPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
          {
            path: '/myPage',
            element: <MyPage />,
          },
          {
            path: '/search/group',
            element: <GroupSearchResultPage />,
          },
          {
            path: '/groupCreate',
            element: <GroupCreatePage />,
          },
          {
            path: '/:groupId/myPage',
            element: <GroupMyPage />,
          },
          {
            path: '/:groupId/myPage/contribute',
            element: <MyContributePage />,
          },
          {
            path: '/:groupId/search',
            element: <SearchResultPage />,
          },
          {
            path: '/:groupName/:page/:postId/report',
            element: <ReportPage />,
          },
          {
            path: '/:groupName/:page/:postId/history',
            element: <PostHistoryPage />,
          },
          {
            path: '/404',
            element: <NotFoundPage />,
          },
        ],
      },
      {
        element: <PageLayout />,
        children: [
          {
            path: '/:groupId/:page',
            element: <GroupMainPage />,
          },
          {
            path: '/:groupId/:page/:postId/edit',
            element: <PostEditPage />,
          },
        ],
      },
      {
        element: <NoHeaderLayout />,
        children: [
          {
            path: '/:groupId/join',
            element: <GroupJoinPage />,
          },
          {
            path: '/invite/:inviteCode',
            element: <InviteProcessPage />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>,
  // </React.StrictMode>,
);
