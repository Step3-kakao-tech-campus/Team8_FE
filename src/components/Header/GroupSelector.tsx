import React from 'react';
import { Option, Select, Spinner } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';
import { MainGroups } from '@apis/dto';
import { MAIN_KEYS } from '@constants/queryKeys';
import { getGroupListFn } from '@apis/mainApi';

const GroupSelector = () => {
  const navigate = useNavigate();
  const { groupId } = useParams();
  const { data: groupList, isLoading } = useQuery<MainGroups>({ queryKey: MAIN_KEYS.main, queryFn: getGroupListFn });

  if (isLoading) {
    return <Spinner />;
  }

  const handleChange = (value?: string) => {
    if (value) {
      navigate(value);
    }
  };
  const getSelectedGroup = () => {
    const selectedGroup = groupList?.myGroup.find((group) => group.groupId === Number(groupId));

    if (selectedGroup) {
      return `/${selectedGroup.groupId}/${selectedGroup.groupName}`;
    }
    return '';
  };

  return (
    <div className='w-52'>
      <Select
        label='그룹 선택'
        onChange={handleChange}
        value={getSelectedGroup()}
        selected={(element) =>
          element &&
          React.cloneElement(element, {
            disabled: true,
            className: 'flex items-center opacity-100 px-0 gap-2 pointer-events-none',
          })
        }
      >
        {groupList?.myGroup.map((group) => (
          <Option key={uuidv4()} value={`/${group.groupId}/${group.groupName}`}>
            {group.groupName}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default GroupSelector;
