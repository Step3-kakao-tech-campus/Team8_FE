import React, { Suspense, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowCircleRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import PageTitleSection from '@components/Page/Common/PageTitleSection';
import PageContainer from '@components/Page/Common/PageContainer';
import Post from '@components/Page/Post/Post';
import { Button } from '@material-tailwind/react';
import LikeDislikeButton from '@components/Page/Common/LikeDislikeButton';
import AddPostButton from '@components/Page/Post/AddPostButton';
import { useQuery } from '@tanstack/react-query';
import { getPageByTitleFn } from '@apis/pageApi';

interface Post {
  postId: number;
  index: string;
  postTitle: string;
  content: string;
  order: number;
  parentPostId: number;
}

interface Error {
  response: {
    data: {
      error: {
        message: string;
      };
    };
  };
}

const GroupMainPage = () => {
  const navigate = useNavigate();
  const { groupId, page } = useParams();

  if (!groupId) return null;
  if (!page) return null;

  const { data, error, status } = useQuery({
    queryKey: ['page', { groupId, title: page }],
    queryFn: () => getPageByTitleFn({ groupId, title: page }),
  });

  const { pageName, pageId, postList, goodCount, badCount } = data?.data?.response || {
    pageName: 'test',
    pageId: 1,
    postList: [],
  };

  const handleWriteClick = () => {
    navigate('개요/edit', {
      state: { pageId, index: '1.', pageName, postTitle: '개요', content: '' },
    });
  };

  useEffect(() => {
    if (error && (error as Error).response.data.error.message === '존재하지 않는 페이지 입니다.') {
      navigate('/404', { replace: true });
    }
  }, [data, error, status]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
        <PageTitleSection
          title={pageName}
          aboveAdornment={
            <LikeDislikeButton goodCount={goodCount} badCount={badCount} groupId={groupId} pageId={pageId} />
          }
        />
        <PageContainer pageId={postList.length !== 0 ? pageId : undefined} hasRecentChangeList>
          {postList.length !== 0 ? (
            <ul>
              {postList.map((post: Post) => (
                <li key={uuidv4()}>
                  <Post
                    pageId={pageId}
                    pageName={pageName}
                    index={post.index}
                    postTitle={post.postTitle}
                    content={post.content}
                  />
                  <AddPostButton />
                </li>
              ))}
            </ul>
          ) : (
            <article className='flex justify-between items-center p-4 bg-gray-100 rounded-lg px-4'>
              <p className='text-sm shrink-0'>
                <span className='font-bold'>{`"${page}"`}</span>에 새로운 글을 작성해보세요!
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
            </article>
          )}
        </PageContainer>
      </div>
    </Suspense>
  );
};

export default GroupMainPage;
