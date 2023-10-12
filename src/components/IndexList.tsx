import { getIndexList } from '@dummy/page';
import React from 'react';

interface IndexListProps {
  pageId: number;
}

const IndexList = ({ pageId }: IndexListProps) => {
  const indexList = getIndexList(pageId);

  const getIndexDepth = (index: string) => {
    return index.split('.').length - 1;
  };

  return (
    <div className='w-full'>
      <h2 className='font-bold px-1 py-2'>목차</h2>
      <ul className='p-4 bg-gray-100 text-sm'>
        {indexList.map((post) => (
          <li key={post.index} className='my-2 leading-tight whitespace-pre'>
            {' '.repeat(getIndexDepth(post.index))} {post.index} {post.postTitle}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexList;
