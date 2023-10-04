import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { List, ListItem, Card, Input } from '@material-tailwind/react';
import { MdClear, MdSearch } from 'react-icons/md';
import { useParams } from 'react-router-dom';

interface InputProps {
  isLoggedIn: boolean;
}

const SearchInput = ({ isLoggedIn }: InputProps) => {
  const { groupName } = useParams();
  const [searchBar, setSearchBar] = useState<string>('');

  const handleSearchBarChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBar(e.target.value);
  };
  const handleSearchBarClear = () => {
    setSearchBar('');
  };
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // console.log(searchBar);
    }
  };

  return (
    <div className={`relative ${isLoggedIn ? 'max-w-sm' : 'max-w-xl'} min-w-[240px] w-full ml-4`}>
      <div className='relative'>
        <MdSearch className='absolute left-2 top-0 bottom-0 my-auto text-2xl text-gray-600 z-10' />
        <Input
          className={`w-full px-9 !text-base !bg-gray-100 !border-none focus:!bg-white focus:shadow-md ${
            searchBar ? 'rounded-b-none' : ''
          }`}
          placeholder={groupName ? '페이지를 검색해보세요.' : '그룹을 검색해보세요.'}
          value={searchBar}
          crossOrigin=''
          labelProps={{
            className: 'hidden',
          }}
          containerProps={{ className: `${isLoggedIn ? 'max-w-[384px]' : 'max-w-[576px]'} min-w-[240px]` }}
          onChange={handleSearchBarChange}
          onKeyDown={handleSubmit}
          onBlur={() => setSearchBar('')}
        />
        {searchBar && (
          <MdClear
            className='absolute right-2 top-0 bottom-0 my-auto text-2xl text-gray-600 cursor-pointer z-10'
            onClick={handleSearchBarClear}
          />
        )}
      </div>
      {searchBar && (
        <Card className='absolute w-full rounded-t-none'>
          <List>
            <ListItem>Inbox</ListItem>
            <ListItem>Trash</ListItem>
            <ListItem>Settings</ListItem>
          </List>
        </Card>
      )}
    </div>
  );
};

export default SearchInput;
