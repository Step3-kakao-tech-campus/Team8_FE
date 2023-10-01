import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('위키키 문구가 뜬다.', () => {
  render(<App />);
  const linkElement = screen.getByText(/위키키/i);
  expect(linkElement).toBeInTheDocument();
});
