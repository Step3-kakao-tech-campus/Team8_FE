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
      keyframes: {
        arrow: {
          '0%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'linear',
          },
          '50%': {
            transform: 'translateX(25%)',
            animationTimingFunction: 'linear',
          },
          '100%': {
            transform: 'translateX(0)',
            animationTimingFunction: 'linear',
          },
        },
      },
      animation: {
        arrowBounce: 'arrow .3s',
      },
    },
  },
  plugins: [],
});
