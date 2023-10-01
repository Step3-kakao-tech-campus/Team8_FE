import React, { useState } from 'react';
import { List, ListItem, Card } from '@material-tailwind/react';
import { MdClear, MdSearch } from 'react-icons/md';

const Input = () => {
  const [searchBar, setSearchBar] = useState<string>('');

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBar(e.target.value);
  };
  const handleSearchBarClear = () => {
    setSearchBar('');
  };

  return (
    <div className='relative max-w-xl min-w-[240px] w-full'>
      <div className='relative'>
        <MdSearch className='absolute left-2 top-0 bottom-0 my-auto text-2xl text-gray-600' />
        <input
          className='w-full px-9 py-[6px] bg-gray-100 border outline-none rounded placeholder:text-sm focus:bg-white focus:shadow-md focus:border-none'
          placeholder='검색어를 입력해보세요...'
          value={searchBar}
          onChange={handleSearchBarChange}
        />
        {searchBar && (
          <MdClear
            className='absolute right-2 top-0 bottom-0 my-auto text-2xl text-gray-600 cursor-pointer'
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

export default Input;
