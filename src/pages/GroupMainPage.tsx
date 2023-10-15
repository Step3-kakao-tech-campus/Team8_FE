import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdArrowCircleRight } from 'react-icons/md';

// import { getPageInfo } from '@dummy/page';
import { getEmptyPageInfo } from '@dummy/page';
import PageTitleSection from '@components/PageTitleSection';
import PageContainer from '@components/PageContainer';
import Post from '@components/Post';
import { Alert, Button } from '@material-tailwind/react';

const GroupMainPage = () => {
  const navigate = useNavigate();
  const { newPage } = useLocation().state;
  const { groupName, page } = useParams();
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  if (!groupName) return null;

  // const { pageName, pageId, postList } = getPageInfo(page ?? groupName);
  const { pageName, pageId, postList } = getEmptyPageInfo(page ?? groupName);

  const handleWriteClick = () => {
    navigate('개요/edit', {
      state: { pageId, index: '1.', pageName, postTitle: '개요', content: '' },
    });
  };

  useEffect(() => {
    setIsAlertOpen(true);
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsAlertOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageName} />
      <PageContainer pageId={postList.length !== 0 ? pageId : undefined} hasRecentChangeList>
        {postList.length !== 0 ? (
          postList.map((post) => (
            <Post
              key={post.postId}
              pageId={pageId}
              pageName={pageName}
              index={post.index}
              postTitle={post.postTitle}
              content={post.content}
            />
          ))
        ) : (
          <article className='flex justify-between items-center p-4 bg-gray-100 rounded-lg px-4'>
            <p className='text-sm shrink-0'>
              <span className='font-bold'>{`"${page ?? groupName}"`}</span>에 작성된 글이 없습니다.
            </p>
            <Button
              variant='text'
              ripple={false}
              className='group flex items-center gap-1 py-1 px-2 text-sm font-bold hover:bg-transparent active:bg-transparent shrink-0'
              onClick={handleWriteClick}
            >
              <span>글쓰기</span>
              <MdArrowCircleRight className='w-5 h-5 group-hover:animate-arrowBounce' />
            </Button>
            {newPage && isAlertOpen && (
              <Alert
                variant='ghost'
                className='py-3 text-sm absolute top-6 max-w-3xl min-w-max mx-auto '
                open={isAlertOpen}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 100 },
                }}
              >
                새 페이지가 생성되었습니다.
              </Alert>
            )}
          </article>
        )}
      </PageContainer>
    </div>
  );
};

export default GroupMainPage;
