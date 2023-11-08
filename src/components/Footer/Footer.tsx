import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/images/logo/logo.svg';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 items-center py-10'>
      <Link to='/' className='mr-4'>
        <Logo fill='black' width='42px' height='42px' />
      </Link>
      <p className='text-sm text-gray-700'>카카오테크캠퍼스 1기 | 8조 | Wekiki | 부산대학교</p>
    </footer>
  );
};

export default Footer;
