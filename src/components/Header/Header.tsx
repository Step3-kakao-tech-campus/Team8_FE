import React from 'react';
import { useRecoilValue } from 'recoil';
import isLoggedInState from '@recoil/atoms/auth';
import { MdPersonAdd, MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '@assets/images/logo/logo.svg';
import HeaderMenu from './HeaderMenu';
import SearchInput from '../Common/SearchInput';
import GroupSelector from './GroupSelector';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <header className='fixed top-0 flex justify-between items-center w-full px-2 py-2 border-b md:px-6 bg-white z-50'>
      <Link to='/' className='mr-4'>
        <Logo fill='black' width='42px' height='42px' />
      </Link>
      <div className={`flex ${isLoggedIn ? 'justify-between' : 'justify-center'} grow`}>
        {isLoggedIn && <GroupSelector />}
        <SearchInput isLoggedIn={isLoggedIn} />
      </div>
      <nav className='flex gap-3 ml-4'>
        {isLoggedIn ? (
          <HeaderMenu />
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
