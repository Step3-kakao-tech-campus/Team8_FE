import { recentChangePageDummyData } from '@dummy/page';
import React from 'react';

const RecentChangeList = () => {
  return (
    <div className='w-full'>
      <h2 className='font-bold px-1 py-2 text-sm'>최근 변경된 페이지</h2>
      <ul className='p-4 bg-gray-100 text-xs'>
        {recentChangePageDummyData.map((page) => (
          <li key={page.pageId} className='my-2 leading-tight'>
            {page.pageName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentChangeList;
