import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';

const GROUPS = [
  { id: 1, label: '부산대학교', value: 'pusan' },
  { id: 2, label: '이삼정보고', value: 'isam' },
  { id: 3, label: '카카오테크캠퍼스', value: 'kakao' },
];

const GroupSelector = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();

  const handleChange = (value: string | undefined) => {
    navigate(`/${value}`);
  };

  return (
    <div className='w-52'>
      <Select label='그룹 선택' value={groupName} onChange={handleChange}>
        {GROUPS.map((group) => (
          <Option key={group.id} value={group.value}>
            {group.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default GroupSelector;
