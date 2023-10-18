import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdOutlineModeComment,
  MdOutlineMoreHoriz,
  MdOutlineHistory,
  MdOutlineErrorOutline,
  MdModeEditOutline,
} from 'react-icons/md';
import { Button, Menu, MenuHandler, MenuList, MenuItem, Typography } from '@material-tailwind/react';
import Viewer from '@components/CKEditor5/Ckviewer';

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
        <div className='flex gap-1'>
          <Button variant='text' ripple={false} className='p-1 text-xl hover:bg-transparent active:bg-transparent'>
            <MdOutlineModeComment />
          </Button>
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
                  navigate(`${postTitle}/edit`, {
                    state: { pageId, index, pageName, postTitle, content },
                  })
                }
              >
                <MdModeEditOutline className='text-2xl' />
                <Typography variant='small' className='font-semibold'>
                  편집
                </Typography>
              </MenuItem>
              <MenuItem className='flex items-center gap-2 py-1'>
                <MdOutlineHistory className='text-2xl' />
                <Typography variant='small' className='font-semibold'>
                  히스토리
                </Typography>
              </MenuItem>
              <MenuItem className='flex items-center gap-2 py-1'>
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
    </article>
  );
};

export default Post;