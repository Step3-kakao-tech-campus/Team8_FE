import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useParams } from 'react-router-dom';
import { getRecentChangeListFn } from '@apis/pageApi';
import { useQuery } from '@tanstack/react-query';
import { PAGE_KEYS } from '@constants/queryKeys';

interface RecentChangePage {
  pageName: string;
}

const RecentChangeList = () => {
  const { groupId } = useParams();
  const numGroupId = Number(groupId);

  if (!groupId) return null;

  const { data } = useQuery({
    queryKey: PAGE_KEYS.recentChangeList({ groupId: numGroupId }),
    queryFn: () => getRecentChangeListFn({ groupId: numGroupId }),
  });

  const { recentPage } = data?.data?.response || { recentPage: [] };

  return (
    <div className='w-full'>
      <h2 className='font-bold px-1 py-2 text-sm'>최근 변경된 페이지</h2>
      <ul className='p-4 bg-gray-100 text-xs'>
        {recentPage &&
          recentPage.map((page: RecentChangePage) => (
            <li key={uuidv4()} className='my-2 leading-tight'>
              <Link to={`/${groupId}/${encodeURIComponent(page.pageName)}`} className='hover:underline'>
                {page.pageName}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentChangeList;
