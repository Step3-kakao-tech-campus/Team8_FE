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
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: '/myPage',
            element: (
              <PrivateRoute>
                <MyPage />
              </PrivateRoute>
            ),
          },
          {
            path: '/search/group',
            element: <GroupSearchResultPage />,
          },
          {
            path: '/groupCreate',
            element: (
              <PrivateRoute>
                <GroupCreatePage />
              </PrivateRoute>
            ),
          },
          {
            path: '/:groupId/myPage',
            element: (
              <PrivateRoute>
                <GroupMyPage />
              </PrivateRoute>
            ),
          },
          {
            path: '/:groupId/myPage/contribute',
            element: (
              <PrivateRoute>
                <MyContributePage />
              </PrivateRoute>
            ),
          },
          {
            path: '/:groupId/search',
            element: (
              <PrivateRoute>
                <SearchResultPage />
              </PrivateRoute>
            ),
          },
          {
            path: '/:groupId/:page/:postId/report',
            element: (
              <PrivateRoute>
                <ReportPage />
              </PrivateRoute>
            ),
          },
          {
            path: '/:groupId/:page/:postId/history',
            element: (
              <PrivateRoute>
                <PostHistoryPage />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        element: <PageLayout />,
        children: [
          {
            path: '/:groupId/:page',
            element: (
              <PrivateRoute>
                <GroupMainPage />
              </PrivateRoute>
            ),
          },
          {
            path: '/:groupId/:page/:postId/edit',
            element: (
              <PrivateRoute>
                <PostEditPage />
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        element: <NoHeaderLayout />,
        children: [
          {
            path: '/signUp',
            element: <SignUpPage />,
          },
          {
            path: '/auth/kakao/signin',
            element: <KakaoLoginPage />,
          },
          {
            path: '/login',
            element: <LoginPage />,
          },
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
