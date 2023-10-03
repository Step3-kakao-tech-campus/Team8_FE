import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';

interface Group {
  id: number;
  title: string;
  url: string;
}

const GROUPS = [
  { id: 1, title: '부산대학교', url: '/pusan' },
  { id: 2, title: '이삼정보고', url: '/isam' },
  { id: 3, title: '카카오테크캠퍼스', url: '/kakao' },
];

const GroupSelector = () => {
  const { groupName } = useParams();
  const navigate = useNavigate();
  const handleClick = (group: Group) => {
    navigate(group.url);
  };

  return (
    <div className='w-52'>
      <Select label='그룹 선택' value={groupName}>
        {GROUPS.map((group) => (
          <Option key={group.id} onClick={() => handleClick(group)}>
            {group.title}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default GroupSelector;
