import React from 'react';
import { Button, ButtonGroup, Typography } from '@material-tailwind/react';
import { getFormattedDateTime } from '@utils/time';
import { deleteCommentFn } from '@apis/postApi';
import { queryClient } from '@apis/queryClient';
import { COMMENT_KEYS } from '@constants/queryKeys';
import { useMutation } from '@tanstack/react-query';
import ConfirmCancelModal from '@components/Modal/ConfirmCancelModal';
import useModal from '@hooks/useModal';

interface CommentProps {
  commentId: number;
  nickName: string;
  content: string;
  createdAt: string;
  // isMyComment: boolean;
}

const Comment = ({
  comment: { commentId, nickName, content, createdAt },
  groupId,
  postId,
}: {
  comment: CommentProps;
  groupId: number;
  postId: number;
}) => {
  const isMyComment = true; // TODO: API 수정되면 data로 받아와야함!
  const deleteModal = useModal();
  // const modifyModal = useModal();

  const { mutate: deleteComment } = useMutation({
    mutationFn: () => deleteCommentFn({ groupId, commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries(COMMENT_KEYS.commentList({ groupId, postId }));
    },
  });

  const handleModifyClick = () => {
    console.log('수정');
  };

  const handleDeleteClick = () => {
    deleteModal.handleModal();
  };

  return (
    <li className='flex flex-col gap-1 list-none w-fit'>
      <div className='flex justify-between items-center gap-2'>
        <span className='text-[15px] font-semibold shrink-0'>{nickName}</span>
        <div className='flex gap-1 items-end'>
          <Typography className='mt-1 text-xs text-gray-600'>{getFormattedDateTime(createdAt)}</Typography>
          {isMyComment && (
            <ButtonGroup size='sm' variant='text' color='white'>
              <Button
                variant='text'
                ripple={false}
                className='px-1 py-0 hover:bg-transparent rounded-none text-xs text-gray-600 font-normal'
                onClick={handleModifyClick}
              >
                수정
              </Button>
              <Button
                variant='text'
                ripple={false}
                className='px-1 py-0 hover:bg-transparent rounded-none text-xs text-gray-600 font-normal'
                onClick={handleDeleteClick}
              >
                삭제
              </Button>
            </ButtonGroup>
          )}
        </div>
      </div>
      <div>
        <Typography className='p-3 text-sm font-normal bg-gray-100 border rounded-lg'>{content}</Typography>
      </div>
      <ConfirmCancelModal
        isOpen={deleteModal.isOpen}
        handleModal={deleteModal.handleModal}
        onConfirm={deleteComment}
        message='댓글을 삭제합니다.'
      />
    </li>
  );
};

export default Comment;
