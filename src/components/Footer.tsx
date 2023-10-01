import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo/logo.svg';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 items-center'>
      <Link to='/' className='mr-4'>
        <Logo fill='black' width='42px' height='42px' />
      </Link>
      <p className='text-sm text-gray-700'>Faire un don | A propos | Politique de confidentialité | Nous contacter</p>
    </footer>
  );
};

export default Footer;
