import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '@pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';

describe('로그인', () => {
  describe('UI 컴포넌트 렌더링', () => {
    it('텍스트 로고 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const textLogoElement = screen.getByTestId('textLogo');

      expect(textLogoElement).toBeInTheDocument();
    });
    it('이메일 인풋 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const emailInputElement = screen.getByTestId('email');

      expect(emailInputElement).toBeInTheDocument();
    });
    it('비밀번호 인풋 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const passwordInputElement = screen.getByTestId('password');

      expect(passwordInputElement).toBeInTheDocument();
    });
    it('로그인 버튼 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const loginBtnElement = screen.getByTestId('loginBtn');

      expect(loginBtnElement).toBeInTheDocument();
    });
    it('회원가입 이동 링크 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const signUpLinkElement = screen.getByTestId('signUpLink');

      expect(signUpLinkElement).toBeInTheDocument();
    });
    it('비밀번호 찾기 이동 링크 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const passwordFindLinkElement = screen.getByTestId('passwordFindLink');

      expect(passwordFindLinkElement).toBeInTheDocument();
    });
    it('카카오톡으로 로그인 버튼 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const kakaoLoginBtnElement = screen.getByTestId('kakaoLoginBtn');

      expect(kakaoLoginBtnElement).toBeInTheDocument();
    });
  });
});
