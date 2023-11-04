import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getIndexList } from '@dummy/page';

interface IndexListProps {
  pageId: number;
}

const IndexList = ({ pageId }: IndexListProps) => {
  const indexList = getIndexList(pageId);

  const scrollToPost = (postId: string) => {
    const postElement = document.getElementById(postId);
    if (postElement) {
      window.scrollTo({ top: postElement.offsetTop - 60, behavior: 'smooth' });
    }
  };

  return (
    <div className='w-full'>
      <h2 className='font-bold px-1 py-2 text-sm'>목차</h2>
      <ul className='p-4 bg-gray-100 text-xs'>
        {indexList.map((post) => (
          <li key={uuidv4()} className='my-2 leading-tight whitespace-pre'>
            {post.index.split('.').length > 2 && '  '}
            <button type='button' onClick={() => scrollToPost(`${pageId}-${post.index}`)}>
              <span className='text-indigo-500'>{post.index}</span> {post.postTitle}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexList;
