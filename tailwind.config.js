/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kakaoContainer: '#FEE500',
        kakaoSymbol: '#000000',
        kakaoLabel: '#000000D9',
      },
      fontFamily: {
        sans: ['NanumSquare', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
