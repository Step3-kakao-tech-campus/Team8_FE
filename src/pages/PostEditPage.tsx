import React, { ChangeEvent, useState } from 'react';
import PageContainer from '@components/Page/Common/PageContainer';
import PageTitleSection from '@components/Page/Common/PageTitleSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input } from '@material-tailwind/react';
import CKEditor from '@components/Page/Post/Editor/Ckeditor';
import PostDeleteModal from '@components/Modal/PostDeleteModal';

const PostEditPage = () => {
  const { pageId, index, pageName, postTitle, content: postContent } = useLocation().state;
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(postTitle);
  const [content, setContent] = useState<string>(postContent);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (data: string) => {
    setContent(data);
  };
  const handleSaveClick = () => {
    // api 연결 후 작성
  };
  const handleDeleteModal = () => {
    setIsDeleteModalOpen((prev) => !prev);
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
              placeholder={`목차(${index}) 제목을 입력하세요.`}
              labelProps={{
                className: 'hidden',
              }}
              onChange={handleTitleChange}
            />
          </div>
          <CKEditor content={content} onChange={handleContentChange} />
          <div className='flex justify-between'>
            <Button
              variant='text'
              ripple={false}
              className='py-1 px-3 text-red-600 hover:bg-transparent hover:underline active:bg-transparent decoration-black'
              onClick={handleDeleteModal}
            >
              삭제하기
            </Button>
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
          <PostDeleteModal title={title} isOpen={isDeleteModalOpen} onClickModal={handleDeleteModal} />
        </article>
      </PageContainer>
    </div>
  );
};

export default PostEditPage;
