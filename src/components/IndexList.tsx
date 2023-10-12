import { getIndexList } from '@dummy/page';
import React from 'react';

interface IndexListProps {
  pageId: number;
}

const IndexList = ({ pageId }: IndexListProps) => {
  const indexList = getIndexList(pageId);

  return (
    <div className='w-full'>
      <h2 className='font-bold px-1 py-2 text-sm'>목차</h2>
      <ul className='p-4 bg-gray-100 text-xs'>
        {indexList.map((post) => (
          <li key={post.index} className='my-2 leading-tight whitespace-pre'>
            {post.index.split('.').length > 2 && '  '}
            <span className='text-indigo-500'>{post.index}</span> {post.postTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexList;