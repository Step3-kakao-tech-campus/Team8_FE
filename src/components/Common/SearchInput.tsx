import React, { useState, KeyboardEvent } from 'react';
import { Input } from '@material-tailwind/react';
import { MdClear, MdSearch } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';

const MAX_LENGTH = 12;

interface InputProps {
  isLoggedIn: boolean;
  className?: string;
}

const SearchInput = ({ isLoggedIn, className }: InputProps) => {
  const { groupId } = useParams();
  const [searchBar, setSearchBar] = useState<string>('');
  const navigate = useNavigate();

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) return;
    setSearchBar(e.target.value);
  };

  const handleSearchBarClear = () => {
    setSearchBar('');
  };
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchBar && e.nativeEvent.isComposing === false) {
      navigate(groupId ? `${groupId}/search?keyword=${searchBar}` : `/search/group?keyword=${searchBar}`);
      setSearchBar('');
    }
  };

  return (
    <div className={`${isLoggedIn ? 'max-w-sm' : 'max-w-xl'} min-w-[240px] w-full ml-4 ${className}`}>
      <div className='relative'>
        <MdSearch className='absolute left-2 top-0 bottom-0 my-auto text-2xl text-gray-600 z-10' />
        <Input
          className='w-full pl-9 pr-16 !text-base !bg-gray-100 !border-none focus:!bg-white focus:shadow-md'
          placeholder={groupId ? '페이지를 검색해보세요.' : '그룹을 검색해보세요.'}
          value={searchBar}
          crossOrigin=''
          maxLength={MAX_LENGTH}
          labelProps={{
            className: 'hidden',
          }}
          containerProps={{ className: `${isLoggedIn ? 'max-w-[384px]' : 'max-w-[576px]'} min-w-[240px]` }}
          onChange={handleSearchBarChange}
          onKeyDown={handleSubmit}
          onBlur={() => setSearchBar('')}
        />
        {searchBar && (
          <div className='absolute right-2 top-0 bottom-0 flex items-center gap-2 text-gray-600'>
            <span>{MAX_LENGTH - searchBar.length}</span>
            <MdClear className='my-auto text-2xl text-gray-600 cursor-pointer z-10' onClick={handleSearchBarClear} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
