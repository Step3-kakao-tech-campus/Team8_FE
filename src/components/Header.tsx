import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MdPersonAdd, MdLogin } from 'react-icons/md';
import { Link } from 'react-router-dom';
import isLoggedInState from '@recoil/login/atoms';
import selectedGroupState from '@recoil/group/atoms';
import { ReactComponent as Logo } from '@assets/images/logo/logo.svg';
import GroupSelector from './GroupSelector';
import SearchInput from './SearchInput';
import ProfileMenu from './ProfileMenu';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const [selectedGroup, setSelectedGroup] = useRecoilState(selectedGroupState);

  return (
    <header className='fixed top-0 flex justify-between items-center w-full px-2 py-2 border-b md:px-6 bg-white z-30'>
      <Link to='/' className='mr-4'>
        <Logo fill='black' width='42px' height='42px' />
      </Link>
      <div className={`flex ${selectedGroup ? 'justify-between' : 'justify-center'} grow`}>
        {isLoggedIn && selectedGroup && (
          <GroupSelector selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
        )}
        <SearchInput selectedGroup={selectedGroup} />
      </div>
      <nav className='flex gap-3 ml-4'>
        {isLoggedIn ? (
          <ProfileMenu selectedGroup={selectedGroup} />
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
