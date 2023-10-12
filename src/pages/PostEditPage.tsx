import React from 'react';
import PageContainer from '@components/PageContainer';
import PageTitleSection from '@components/PageTitleSection';
import Viewer from '@components/Viewer';
import { useLocation } from 'react-router-dom';

const PostEditPage = () => {
  const { index, pageName, postTitle, content } = useLocation().state;

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageName} />
      <PageContainer>
        <article>
          <div className='border-b-2 mb-4'>
            <h2 className='text-xl leading-relaxed font-semibold'>
              <span className='text-indigo-500'>{index}</span> {postTitle}
            </h2>
          </div>
          <Viewer content={content} />
        </article>
      </PageContainer>
    </div>
  );
};

export default PostEditPage;
