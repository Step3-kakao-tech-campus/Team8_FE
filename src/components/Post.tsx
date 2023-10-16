import React from 'react';
import { Button } from '@material-tailwind/react';
import Viewer from '@components/CKEditor5/Ckviewer';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  pageId: number;
  pageName: string;
  index: string;
  postTitle: string;
  content: string;
}

const Post = ({ pageId, pageName, index, postTitle, content }: PostProps) => {
  const navigate = useNavigate();

  return (
    <article>
      <div className='flex justify-between border-b-2'>
        <h2 className='text-xl leading-relaxed font-semibold'>
          <span className='text-indigo-500'>{index}</span> {postTitle}
        </h2>
        <Button
          variant='text'
          ripple={false}
          className='flex justify-center items-center p-1 hover:bg-transparent active:bg-transparent'
          onClick={() =>
            navigate(`${postTitle}/edit`, {
              state: { pageId, index, pageName, postTitle, content },
            })
          }
        >
          [편집]
        </Button>
      </div>
      <Viewer content={content} />
    </article>
  );
};

export default Post;
