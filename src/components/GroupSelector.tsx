import React from 'react';
import { Select, Option } from '@material-tailwind/react';
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
    <div className='w-52'>
      <Select label='그룹 선택' value={selectedGroup}>
        {GROUPS.map((group) => (
          <Option key={group.id} onClick={() => handleClick(group.title)}>
            {group.title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default GroupSelector;
