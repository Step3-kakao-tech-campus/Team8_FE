import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SignUpPage from '@pages/SignUpPage';
import TestWrapper from '@test/utils/TestWrapper';
import { EMAIL_ERROR_MSG, NAME_ERROR_MSG, PASSWORD_CONFIRM_ERROR_MSG, PASSWORD_ERROR_MSG } from '@constants/errorMsg';

describe('회원가입', () => {
  describe('UI 컴포넌트 렌더링', () => {
    it('텍스트 로고 렌더링 성공', () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );
      const textLogoElement = screen.getByTestId('textLogo');

      expect(textLogoElement).toBeInTheDocument();
    });
    it('이메일 인풋 렌더링 성공', () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );
      const emailInputElement = screen.getByTestId('email');

      expect(emailInputElement).toBeInTheDocument();
    });
    it('비밀번호 인풋 렌더링 성공', () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );
      const passwordInputElement = screen.getByTestId('password');

      expect(passwordInputElement).toBeInTheDocument();
    });
    it('비밀번호 확인 인풋 렌더링 성공', () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );
      const passwordConfirmInputElement = screen.getByTestId('passwordConfirm');

      expect(passwordConfirmInputElement).toBeInTheDocument();
    });
    it('이름 인풋 렌더링 성공', () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );
      const nameInputElement = screen.getByTestId('name');

      expect(nameInputElement).toBeInTheDocument();
    });
    it('회원가입 버튼 렌더링 성공', () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );
      const signUpBtnInputElement = screen.getByTestId('signUpBtn');

      expect(signUpBtnInputElement).toBeInTheDocument();
    });
  });
  describe('유효성 검증', () => {
    it('이메일 형식이 잘못된 경우, 오류 메시지가 표시되어야 함', async () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );

      // 유효하지 않은 이메일 형식 입력
      const INVALID_EMAIL = 'invalid-email';
      const emailInputElement = screen.getByTestId('email');
      fireEvent.change(emailInputElement, { target: { value: INVALID_EMAIL } });

      // 이메일 형식 오류 메시지 확인
      const emailErrorMessage = await screen.findByText(EMAIL_ERROR_MSG);
      expect(emailErrorMessage).toBeInTheDocument();
    });
    it('비밀번호 형식이 잘못된 경우, 오류 메시지가 표시되어야 함', async () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );

      // 유효하지 않은 비밀번호 형식 입력
      const INVALID_PASSWORD = 'short';
      const passwordInputElement = screen.getByTestId('password');
      fireEvent.change(passwordInputElement, { target: { value: INVALID_PASSWORD } });

      // 비밀번호 형식 오류 메시지 확인
      const passwordErrorMessage = await screen.findByText(PASSWORD_ERROR_MSG);
      expect(passwordErrorMessage).toBeInTheDocument();
    });
    it('비밀번호와 비밀번호 확인이 다른 경우, 오류 메시지가 표시되어야 함', async () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );

      const VALID_PASSWORD = '12345678a!';
      const DIFFERENT_PASSWORD = `!${VALID_PASSWORD}`;

      // 비밀번호와 비밀번호 확인 필드 입력
      const passwordInputElement = screen.getByTestId('password');
      const confirmPasswordInputElement = screen.getByTestId('passwordConfirm');

      fireEvent.input(passwordInputElement, { target: { value: VALID_PASSWORD } });
      fireEvent.input(confirmPasswordInputElement, { target: { value: DIFFERENT_PASSWORD } });

      // 오류 메시지가 표시되는지 확인
      const passwordCormfirmErrorMessage = await screen.findByText(PASSWORD_CONFIRM_ERROR_MSG);
      expect(passwordCormfirmErrorMessage).toBeInTheDocument();
    });
    it('이름 형식이 잘못된 경우, 오류 메시지가 표시되어야 함', async () => {
      render(
        <TestWrapper>
          <SignUpPage />
        </TestWrapper>,
      );

      // 유효하지 않은 이름 형식 입력
      const INVALID_NAME = '1234567890';
      const nameInputElement = screen.getByTestId('name');
      fireEvent.change(nameInputElement, { target: { value: INVALID_NAME } });

      // 이름 형식 오류 메시지 확인
      const nameErrorMessage = await screen.findByText(NAME_ERROR_MSG);
      expect(nameErrorMessage).toBeInTheDocument();
    });
  });
});
