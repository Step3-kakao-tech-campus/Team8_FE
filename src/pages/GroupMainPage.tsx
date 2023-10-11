import React from 'react';
import { useParams } from 'react-router-dom';

import { getPageInfo } from '@dummy/page';
import PageTitleSection from '@components/PageTitleSection';
import PageContainer from '@components/PageContainer';
import Viewer from '@components/Viewer';

const GroupMainPage = () => {
  const { groupName } = useParams();

  if (!groupName) return null;

  const pageInfo = getPageInfo(groupName);

  return (
    <div>
      <PageTitleSection title={pageInfo.pageName} />
      <PageContainer>
        {pageInfo.postList.map((post) => (
          <article>
            <div className='border-b-2 mb-4'>
              <h2 className='text-3xl leading-normal font-semibold'>
                {post.index} {post.postTitle}
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
