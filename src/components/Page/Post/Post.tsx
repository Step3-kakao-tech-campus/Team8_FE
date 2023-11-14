import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollIntoView } from 'seamless-scroll-polyfill';
import {
  MdOutlineModeComment,
  MdOutlineMoreHoriz,
  MdOutlineHistory,
  MdOutlineErrorOutline,
  MdModeEditOutline,
} from 'react-icons/md';
import { Button, Menu, MenuHandler, MenuList, MenuItem, Typography, Badge } from '@material-tailwind/react';
import Viewer from '@components/Page/Post/Editor/Ckviewer';
import CommentList from './CommentList';

interface PostProps {
  groupId: number;
  postId: number;
  pageId: number;
  pageName: string;
  index: string;
  postTitle: string;
  content: string;
}

const Post = ({ groupId, postId, pageId, pageName, index, postTitle, content }: PostProps) => {
  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);
  const [commentCount, setCommentCount] = useState<number>(0);
  const commentRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const handleCommentClick = () => {
    setIsCommentOpen((prev) => !prev);
    if (!isCommentOpen && commentRef.current) {
      scrollIntoView(commentRef.current, { block: 'center', behavior: 'smooth' });
    }
  };

  return (
    <article id={postId.toString()}>
      <div className='flex justify-between border-b-2'>
        <h2 className='text-xl leading-relaxed font-semibold'>
          <span className='text-indigo-500'>{index}</span> {postTitle}
        </h2>
        <div className='flex gap-1'>
          <Badge
            content={commentCount}
            className={`text-[10px] !min-w-[16px] !min-h-[16px] !top-[46%] !right-[120%] p-0 bg-transparent text-black font-bold ${
              !commentCount && 'hidden'
            }`}
          >
            <Button
              variant='text'
              ripple={false}
              className='p-1 text-xl hover:bg-transparent active:bg-transparent'
              onClick={handleCommentClick}
            >
              <MdOutlineModeComment />
            </Button>
          </Badge>
          <Menu placement='right-start'>
            <MenuHandler>
              <Button variant='text' className='p-1 text-xl hover:bg-transparent active:bg-transparent'>
                <MdOutlineMoreHoriz />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className='flex items-center gap-2 py-1'
                onClick={() =>
                  navigate(`${postId}/edit`, {
                    state: { pageId, index, pageName, postTitle, content },
                  })
                }
              >
                <MdModeEditOutline className='text-2xl' />
                <Typography variant='small' className='font-semibold'>
                  편집
                </Typography>
              </MenuItem>
              <MenuItem className='flex items-center gap-2 py-1' onClick={() => navigate(`${postId}/history`)}>
                <MdOutlineHistory className='text-2xl' />
                <Typography variant='small' className='font-semibold'>
                  히스토리
                </Typography>
              </MenuItem>
              <MenuItem className='flex items-center gap-2 py-1' onClick={() => navigate(`${postId}/report`)}>
                <MdOutlineErrorOutline className='text-2xl' />
                <Typography variant='small' className='font-semibold'>
                  신고
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <Viewer content={content} />
      <CommentList
        groupId={groupId}
        postId={postId}
        commentRef={commentRef}
        isOpen={isCommentOpen}
        onCommentClose={handleCommentClick}
        setCommentCount={setCommentCount}
      />
    </article>
  );
};

export default Post;
