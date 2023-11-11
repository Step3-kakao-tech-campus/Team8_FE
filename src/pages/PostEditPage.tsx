import React, { ChangeEvent, useEffect, useState } from 'react';
import PageContainer from '@components/Page/Common/PageContainer';
import PageTitleSection from '@components/Page/Common/PageTitleSection';
import useModal from '@hooks/useModal';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Tooltip } from '@material-tailwind/react';
import CKEditor from '@components/Page/Post/Editor/Ckeditor';
import PostDeleteModal from '@components/Modal/PostDeleteModal';
import { useMutation } from '@tanstack/react-query';
import { createPostFn, modifyPostFn } from '@apis/postApi';
import { queryClient } from '@apis/queryClient';
import { PAGE_KEYS } from '@constants/queryKeys';

const MAX_LENGTH = 16;

const PostEditPage = () => {
  // url로 넘어온 group id, post id
  const { page, groupId, postId: post } = useParams();
  const numGroupId = Number(groupId);
  const postId = Number(post);
  if (!groupId || !page) return null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 페이지에서 넘어온 데이터
  const { pageId, parentPostId, order, index, pageName, postTitle, content: postContent, type } = useLocation().state;

  const [title, setTitle] = useState<string>(postTitle);
  const [content, setContent] = useState<string>(postContent);

  const navigate = useNavigate();
  const deleteModal = useModal();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_LENGTH) return;
    setTitle(e.target.value);
  };

  const handleContentChange = (data: string) => {
    setContent(data);
  };

  // 새로 작성
  const { mutate: createPost } = useMutation({
    mutationFn: () => createPostFn({ groupId: numGroupId, pageId, parentPostId, order, title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries(PAGE_KEYS.byTitle({ groupId: numGroupId, title: pageName }));
      queryClient.invalidateQueries(PAGE_KEYS.indexList({ groupId: numGroupId, pageId }));
      queryClient.invalidateQueries(PAGE_KEYS.recentChangeList({ groupId: numGroupId }));
    },
  });

  // 수정
  const { mutate: updatePost } = useMutation({
    mutationFn: () => modifyPostFn({ groupId: numGroupId, postId, title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries(PAGE_KEYS.byTitle({ groupId: numGroupId, title: pageName }));
      queryClient.invalidateQueries(PAGE_KEYS.indexList({ groupId: numGroupId, pageId }));
      queryClient.invalidateQueries(PAGE_KEYS.recentChangeList({ groupId: numGroupId }));
    },
  });

  const handleSaveClick = () => {
    // 새로 작성하는 경우
    if (type === 'new') {
      createPost();
    } else {
      // 있던 글 수정하는 경우
      updatePost();
    }
    navigate(`/${groupId}/${page}`, { replace: true });
  };

  return (
    <div className='mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg'>
      <PageTitleSection title={pageName} />
      <PageContainer pageId={pageId} hasRecentChangeList={false}>
        <article className='p-4 bg-gray-100'>
          <div className='flex items-center gap-3 pb-2 border-b-2 mb-4'>
            <h2 className='text-xl text-indigo-500 leading-relaxed font-semibold'>{index}</h2>
            <Input
              className='!text-base !border !border-gray-400 bg-white rounded-md focus:!border-gray-700'
              crossOrigin=''
              value={title}
              maxLength={MAX_LENGTH}
              placeholder='제목을 입력하세요.'
              labelProps={{
                className: 'hidden',
              }}
              icon={<span>{MAX_LENGTH - title.length}</span>}
              onChange={handleTitleChange}
            />
          </div>
          <CKEditor content={content} onChange={handleContentChange} />
          <div className={`flex justify-between ${type === 'new' && 'flex-row-reverse'}`}>
            {type !== 'new' && (
              <Tooltip
                content='하위 목차가 존재하지 않는 포스트만 가능합니다.'
                placement='bottom'
                className='border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-black'
              >
                <Button
                  variant='text'
                  ripple={false}
                  className='py-1 px-3 text-red-600 hover:bg-transparent hover:underline active:bg-transparent decoration-black'
                  onClick={deleteModal.handleModal}
                >
                  삭제하기
                </Button>
              </Tooltip>
            )}

            <div className='flex gap-3'>
              <Button
                color='white'
                ripple={false}
                className='py-2 rounded-md shadow-none border border-gray-700 hover:shadow-none'
                onClick={() => navigate(-1)}
              >
                취소
              </Button>
              <Button ripple={false} className='py-2 rounded-md hover:shadow-none' onClick={handleSaveClick}>
                저장
              </Button>
            </div>
          </div>
          <PostDeleteModal
            title={title}
            isOpen={deleteModal.isOpen}
            onClickModal={deleteModal.handleModal}
            groupId={numGroupId}
            postId={postId}
            pageName={page}
          />
        </article>
      </PageContainer>
    </div>
  );
};

export default PostEditPage;
