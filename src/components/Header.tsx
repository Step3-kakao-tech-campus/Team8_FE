import React from 'react';
import { useRecoilValue } from 'recoil';
import { MdPersonAdd, MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo/logo.svg';
import isLoggedInState from '../recoil/login/atoms';
import ProfileMenu from './ProfileMenu';
import isGroupSelectedState from '../recoil/group/atoms';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const isGroupSelected = useRecoilValue(isGroupSelectedState);

  return (
    <header className='flex justify-between items-center px-6 py-2 border-b'>
      <Link to='/'>
        <Logo fill='black' width='42px' height='42px' />
      </Link>
      <nav className='flex gap-3'>
        {isLoggedIn ? (
          <ProfileMenu isGroupSelected={isGroupSelected} />
        ) : (
          <>
            <Link to='/signUp' className='flex items-center gap-1'>
              <MdPersonAdd className='w-6 h-6' />
              <span>회원가입</span>
            </Link>
            <Link to='/login' className='flex items-center gap-1'>
              <MdLogin className='w-6 h-6' />
              <span>로그인</span>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
