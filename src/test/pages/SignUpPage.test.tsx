import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpPage from '../../pages/SignUpPage';

describe('회원가입', () => {
  describe('UI 컴포넌트 렌더링', () => {
    it('텍스트 로고 렌더링 성공', () => {
      render(<SignUpPage />);
      const textLogoElement = screen.getByTestId('textLogo');

      expect(textLogoElement).toBeInTheDocument();
    });
  });
});
