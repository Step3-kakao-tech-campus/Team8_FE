import React, { useState } from 'react';

import { MdAddCircleOutline } from 'react-icons/md';
import { Button, ButtonGroup } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

interface Post {
  postId: number;
  index: string;
  postTitle: string;
  content: string;
  order: number;
  parentPostId: number;
}

interface Props {
  post: Post;
  pageId: number;
  pageName: string;
  descendantCount: number;
}

const generateNextIndex = (currentIndex: string) => {
  const parts = currentIndex.split('.');
  parts[parts.length - 1] = (parseInt(parts[parts.length - 1], 10) + 1).toString();
  return parts.join('.');
};

const generateChildIndex = (currentIndex: string) => {
  const parts = currentIndex.split('.');
  parts.push('1');
  return parts.join('.');
};

const AddPostButton = ({ post, pageId, pageName, descendantCount }: Props) => {
  const [isSplit, setIsSplit] = useState(false);

  const { postId, parentPostId, order, index } = post;

  const navigate = useNavigate();

  const handleButtonClick = () => {
    setIsSplit((prev) => !prev);
  };

  // 다음 목차에 추가하는 경우: parentPostId = 현재 포스트의 parentPostId, order = 현재 포스트의 order + 포스트의 후손 수 + 1 지점, index = 현재 포스트 index의 가장 끝만 + 1
  // 1(부모: 1)에서 누르면 2가 되고, 1.1에서 누르면 1.2가 되고, 1.1.3에서 누르면 1.1.4가 됨
  const handleAddNextPostClick = () => {
    const newOrder = order + descendantCount + 1;
    const newIndex = generateNextIndex(index);

    navigate('개요/edit', {
      state: {
        pageId,
        parentPostId,
        order: newOrder,
        index: newIndex,
        pageName,
        postTitle: '',
        content: '',
        type: 'new',
      },
    });
  };

  // 하위 목차에 추가하는 경우: parentPostId = 현재 포스트의 postId, order = 현재 order + 1, index = 현재 포스트 index 뒤에 .1 추가
  const handleAddChildPostClick = () => {
    const newOrder = order + 1;
    const newIndex = generateChildIndex(index);

    navigate('개요/edit', {
      state: {
        pageId,
        parentPostId: postId,
        order: newOrder,
        index: newIndex,
        pageName,
        postTitle: '',
        content: '',
        type: 'new',
      },
    });
  };

  return (
    <div className='flex items-center justify-center mb-4 '>
      <Button
        ripple={false}
        fullWidth
        className={`h-10 bg-gray-50 text-white hover:text-gray-400 shadow-none rounded-sm transition-all duration-300 ease-in-out p-0 ${
          isSplit ? 'w-0' : 'w-full'
        }`}
        onClick={handleButtonClick}
      >
        <MdAddCircleOutline size={22} className='mx-auto' />
      </Button>
      {isSplit && (
        <ButtonGroup color='white' fullWidth className='shadow-none border-gray-300 rounded-sm h-10'>
          <Button ripple={false} className='bg-gray-50 text-gray-500 rounded-sm' onClick={handleAddNextPostClick}>
            다음 목차로 추가
          </Button>
          <Button ripple={false} className='bg-gray-50 text-gray-500 rounded-sm' onClick={handleAddChildPostClick}>
            하위 목차로 추가
          </Button>
        </ButtonGroup>
      )}
    </div>
  );
};

export default AddPostButton;
