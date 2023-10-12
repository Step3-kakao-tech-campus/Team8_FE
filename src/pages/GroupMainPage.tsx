import React from 'react';
import { useParams } from 'react-router-dom';

import { getPageInfo } from '@dummy/page';
import PageTitleSection from '@components/PageTitleSection';
import PageContainer from '@components/PageContainer';
import Viewer from '@components/Viewer';

const GroupMainPage = () => {
  const { groupName, page } = useParams();

  if (!groupName) return null;

  const pageInfo = getPageInfo(page ?? groupName);

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageInfo.pageName} />
      <PageContainer pageId={pageInfo.pageId}>
        {pageInfo.postList.map((post) => (
          <article key={post.postId}>
            <div className='border-b-2 mb-4'>
              <h2 className='text-xl leading-relaxed font-semibold'>
                <span className='text-indigo-500'>{post.index}</span> {post.postTitle}
              </h2>
            </div>
            <Viewer content={post.content} />
          </article>
        ))}
      </PageContainer>
    </div>
  );
};

export default GroupMainPage;
