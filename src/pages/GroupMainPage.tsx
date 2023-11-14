import React from 'react';
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
import { PAGE_KEYS } from '@constants/queryKeys';

interface Post {
  postId: number;
  index: string;
  postTitle: string;
  content: string;
  order: number;
  parentPostId: number;
}

const countPostsWithPrefix = (postList: Post[], prefix: string) =>
  postList.filter((post) => post.index.startsWith(`${prefix}.`)).length;

const GroupMainPage = () => {
  const navigate = useNavigate();
  const { groupId, page } = useParams();
  const numGroupId = Number(groupId);

  if (!groupId) return null;
  if (!page) return null;

  const { data, isLoading } = useQuery({
    queryKey: PAGE_KEYS.byTitle({ groupId: numGroupId, title: page }),
    queryFn: () => getPageByTitleFn({ groupId: numGroupId, title: encodeURIComponent(page) }),
  });

  const { pageName, pageId, postList, goodCount, badCount } = data?.data?.response || {
    pageName: '',
    pageId: 1,
    postList: [],
    goodCount: 0,
    badCount: 0,
  };

  const handleNewPostClick = () => {
    navigate('개요/edit', {
      state: { pageId, parentPostId: 0, order: 1, index: '1', pageName, postTitle: '개요', content: '', type: 'new' },
    });
  };

  return (
    <div className='mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-xl'>
      <PageTitleSection
        title={pageName}
        aboveAdornment={
          <LikeDislikeButton
            goodCount={goodCount}
            badCount={badCount}
            groupId={numGroupId}
            pageId={pageId}
            page={page}
          />
        }
      />
      {isLoading ? (
        <p>loading</p>
      ) : (
        <PageContainer pageId={postList.length !== 0 ? pageId : undefined} hasRecentChangeList>
          {postList.length !== 0 ? (
            <ul>
              {postList.map((post: Post) => (
                <li key={uuidv4()}>
                  <Post
                    groupId={numGroupId}
                    postId={post.postId}
                    pageId={pageId}
                    pageName={pageName}
                    index={post.index}
                    postTitle={post.postTitle}
                    content={post.content}
                  />
                  <AddPostButton
                    post={post}
                    pageId={pageId}
                    pageName={pageName}
                    descendantCount={countPostsWithPrefix(postList, post.index)}
                  />
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
                onClick={handleNewPostClick}
              >
                <span>글쓰기</span>
                <MdArrowCircleRight className='w-5 h-5 group-hover:animate-arrowBounce' />
              </Button>
            </article>
          )}
        </PageContainer>
      )}
    </div>
  );
};

export default GroupMainPage;
