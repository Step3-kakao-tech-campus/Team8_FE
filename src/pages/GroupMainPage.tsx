import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getPageInfo } from '@dummy/page';
import PageTitleSection from '@components/PageTitleSection';
import PageContainer from '@components/PageContainer';
import Viewer from '@components/Viewer';
import { Button } from '@material-tailwind/react';

const GroupMainPage = () => {
  const { groupName, page } = useParams();
  const navigate = useNavigate();

  if (!groupName) return null;

  const pageInfo = getPageInfo(page ?? groupName);

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageInfo.pageName} />
      <PageContainer pageId={pageInfo.pageId}>
        {pageInfo.postList.map((post) => (
          <article key={post.postId}>
            <div className='flex justify-between border-b-2 mb-4'>
              <h2 className='text-xl leading-relaxed font-semibold'>
                <span className='text-indigo-500'>{post.index}</span> {post.postTitle}
              </h2>
              <Button
                variant='text'
                size='sm'
                ripple={false}
                className='p-1 hover:bg-transparent active:bg-transparent'
                onClick={() => navigate('modify')}
              >
                [편집]
              </Button>
            </div>
            <Viewer content={post.content} />
          </article>
        ))}
      </PageContainer>
    </div>
  );
};

export default GroupMainPage;
