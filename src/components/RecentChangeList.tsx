import React from 'react';

const RecentChangeList = () => {
  const dummy = [
    { pageId: 1, pageName: 'page1' },
    { pageId: 2, pageName: 'page2' },
    { pageId: 3, pageName: '테스트 페이지 이름 테스트 테스트' },
  ];

  return (
    <div className='w-44'>
      <h2 className='text-lg font-bold px-1 py-2'>최근 변경된 페이지</h2>
      <ul className='p-4 bg-gray-100 text-sm'>
        {dummy.map((change) => (
          <li key={change.pageId} className='my-2 leading-tight'>
            {change.pageName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentChangeList;
