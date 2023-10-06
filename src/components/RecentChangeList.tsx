import { recentChangePageDummyData } from '@dummy/page';
import React from 'react';

const RecentChangeList = () => {
  return (
    <div className='w-44'>
      <h2 className='font-bold px-1 py-2'>최근 변경된 페이지</h2>
      <ul className='p-4 bg-gray-100 text-sm'>
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
