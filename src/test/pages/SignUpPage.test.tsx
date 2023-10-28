import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpPage from '@pages/SignUpPage';
import { BrowserRouter } from 'react-router-dom';

describe('회원가입', () => {
  describe('UI 컴포넌트 렌더링', () => {
    it('텍스트 로고 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>,
      );
      const textLogoElement = screen.getByTestId('textLogo');

      expect(textLogoElement).toBeInTheDocument();
    });
    it('이메일 인풋 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>,
      );
      const emailInputElement = screen.getByTestId('email');

      expect(emailInputElement).toBeInTheDocument();
    });
    it('비밀번호 인풋 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>,
      );
      const passwordInputElement = screen.getByTestId('password');

      expect(passwordInputElement).toBeInTheDocument();
    });
    it('이름 인풋 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>,
      );
      const nameInputElement = screen.getByTestId('name');

      expect(nameInputElement).toBeInTheDocument();
    });
    it('회원가입 버튼 렌더링 성공', () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>,
      );
      const signUpBtnInputElement = screen.getByTestId('signUpBtn');

      expect(signUpBtnInputElement).toBeInTheDocument();
    });
  });
});
