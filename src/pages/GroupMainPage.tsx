import React from 'react';
import { useParams } from 'react-router-dom';

import { getPageInfo } from '@dummy/page';
import PageTitleSection from '@components/PageTitleSection';
import PageContainer from '@components/PageContainer';
import Post from '@components/Post';

const GroupMainPage = () => {
  const { groupName, page } = useParams();

  if (!groupName) return null;

  const pageInfo = getPageInfo(page ?? groupName);

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageInfo.pageName} />
      <PageContainer pageId={pageInfo.pageId} hasRecentChangeList>
        {pageInfo.postList.map((post) => (
          <Post
            key={post.postId}
            pageId={pageInfo.pageId}
            pageName={pageInfo.pageName}
            index={post.index}
            postTitle={post.postTitle}
            content={post.content}
          />
        ))}
      </PageContainer>
    </div>
  );
};

export default GroupMainPage;
