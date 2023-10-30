import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdArrowCircleRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { getPageInfo } from '@dummy/page';
// import { getEmptyPageInfo } from '@dummy/page';
import PageTitleSection from '@components/Page/Common/PageTitleSection';
import PageContainer from '@components/Page/Common/PageContainer';
import Post from '@components/Page/Post/Post';
import { Button } from '@material-tailwind/react';
import LikeDislikeButton from '@components/Page/Common/LikeDislikeButton';
import AddPostButton from '@components/Page/Post/AddPostButton';

const GroupMainPage = () => {
  const navigate = useNavigate();
  const { groupName, page } = useParams();

  if (!groupName) return null;

  const { pageName, pageId, postList } = getPageInfo(page ?? groupName);
  // const { pageName, pageId, postList } = getEmptyPageInfo(page ?? groupName);

  const handleWriteClick = () => {
    navigate('개요/edit', {
      state: { pageId, index: '1.', pageName, postTitle: '개요', content: '' },
    });
  };

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageName} aboveAdornment={<LikeDislikeButton upCount={12} downCount={7} />} />
      <PageContainer pageId={postList.length !== 0 ? pageId : undefined} hasRecentChangeList>
        {postList.length !== 0 ? (
          <ul>
            {postList.map((post) => (
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
              <span className='font-bold'>{`"${page ?? groupName}"`}</span>에 새로운 글을 작성해보세요!
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
  );
};

export default GroupMainPage;
