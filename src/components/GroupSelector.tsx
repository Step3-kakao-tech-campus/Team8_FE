import React from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, Button } from '@material-tailwind/react';
import { SetterOrUpdater } from 'recoil';

type GroupSelectorProps = {
  selectedGroup: string;
  setSelectedGroup: SetterOrUpdater<string>;
};

const GROUPS = [
  { id: 1, title: '부산대학교' },
  { id: 2, title: '이삼정보고' },
  { id: 3, title: '카카오테크캠퍼스' },
];

const GroupSelector = ({ selectedGroup, setSelectedGroup }: GroupSelectorProps) => {
  const handleClick = (title: string) => {
    setSelectedGroup(title);
  };

  return (
    <Menu>
      <MenuHandler>
        <Button className='w-52 py-[6px] mr-4 font-normal text-base text-black bg-transparent shadow-none hover:shadow-none border border-black'>
          {selectedGroup}
        </Button>
      </MenuHandler>
      <MenuList className='w-52'>
        {GROUPS.map((group) => (
          <MenuItem key={group.id} onClick={() => handleClick(group.title)}>
            {group.title}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GroupSelector;
