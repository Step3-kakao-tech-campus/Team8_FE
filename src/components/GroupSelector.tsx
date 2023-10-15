import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import { unOfficialGroupDummyData } from '@dummy/group';

const GroupSelector = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();

  const handleChange = (value?: string) => {
    navigate(`/${value}`, {
      state: { newPage: false },
    });
  };

  return (
    <div className='w-52'>
      <Select label='그룹 선택' value={groupName} onChange={handleChange}>
        {unOfficialGroupDummyData.map((group) => (
          <Option key={group.groupId} value={group.groupName}>
            {group.groupName}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default GroupSelector;
