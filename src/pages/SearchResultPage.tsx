import React from 'react';
import RecentChangeList from '@components/RecentChangeList';
import { MdArrowCircleRight } from 'react-icons/md';

const SearchResultPage = () => {
  const keyword = '테스트 검색어';
  const dummy = [
    { id: 1, title: 'page1', content: 'page1 content' },
    { id: 2, title: 'page2', content: 'page2 content' },
    { id: 3, title: 'page3', content: 'page3 content' },
  ];

  return (
    <div className='flex p-14 gap-20'>
      <section className='result w-9/12'>
        <span className='text-5xl font-bold'>{keyword}</span>
        <div className='flex items-center justify-between bg-gray-200 rounded-lg p-4 my-8'>
          <span className='text-lg'>찾는 페이지가 없다면?</span>
          <div className='flex items-center gap-1 font-bold'>
            <span>새 페이지 생성하기</span>
            <MdArrowCircleRight className='w-5 h-5' />
          </div>
        </div>
        {dummy.map((page) => (
          <div key={page.id} className='px-2 py-8 border-b border-gray-200'>
            <h2 className='text-xl font-bold mb-1'>{page.title}</h2>
            <p className='text-sm text-gray-500'>{page.content}</p>
          </div>
        ))}
      </section>
      <aside>
        <RecentChangeList />
      </aside>
    </div>
  );
};

export default SearchResultPage;
