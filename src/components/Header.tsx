import React from 'react';
import { useRecoilValue } from 'recoil';
import { MdPersonAdd, MdLogin, MdMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo/logo.svg';
import isLoggedInState from '../recoil/login/atoms';

const Header = (): JSX.Element => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <header className='flex justify-between items-center px-6 py-2 border-b'>
      <NavLink to='/'>
        <Logo fill='black' width='42px' height='42px' />
      </NavLink>
      <nav className='flex gap-3'>
        {isLoggedIn ? (
          <MdMenu className='w-6 h-6' />
        ) : (
          <>
            <NavLink to='/signUp' className='flex items-center gap-1'>
              <MdPersonAdd className='w-6 h-6' />
              <span>회원가입</span>
            </NavLink>
            <NavLink to='/login' className='flex items-center gap-1'>
              <MdLogin className='w-6 h-6' />
              <span>로그인</span>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
