import React from 'react';
import { Button, ButtonGroup, Textarea, Typography } from '@material-tailwind/react';
import { getFormattedDateTime } from '@utils/time';
import { queryClient } from '@apis/queryClient';
import { COMMENT_KEYS } from '@constants/queryKeys';
import { useMutation } from '@tanstack/react-query';
import ConfirmCancelModal from '@components/Modal/ConfirmCancelModal';
import useModal from '@hooks/useModal';
import { deleteCommentFn, modifyCommentFn } from '@apis/commentApi';

interface CommentProps {
  commentId: number;
  nickName: string;
  content: string;
  createdAt: string;
  mine: boolean;
}

const getRandomColor = () => {
  const baseColor = [105, 149, 199];
  const range = 30;

  const r = baseColor[0] + Math.floor(Math.random() * range);
  const g = baseColor[1] + Math.floor(Math.random() * range);
  const b = baseColor[2] + Math.floor(Math.random() * range);

  return `rgba(${r}, ${g}, ${b}, 0.1)`;
};

const Comment = ({
  comment: { commentId, nickName, content, createdAt, mine },
  groupId,
  postId,
}: {
  comment: CommentProps;
  groupId: number;
  postId: number;
}) => {
  const deleteModal = useModal();
  const modifyModal = useModal();
  const [isModify, setIsModify] = React.useState<boolean>(false);
  const [newContent, setNewContent] = React.useState<string>(content);

  const { mutate: modifyComment } = useMutation({
    mutationFn: () => modifyCommentFn({ groupId, commentId, content: newContent }),
    onSuccess: () => {
      queryClient.invalidateQueries(COMMENT_KEYS.commentList({ groupId, postId }));
      setIsModify(false);
    },
  });

  const { mutate: deleteComment } = useMutation({
    mutationFn: () => deleteCommentFn({ groupId, commentId }),
    onSuccess: () => {
      queryClient.invalidateQueries(COMMENT_KEYS.commentList({ groupId, postId }));
    },
  });

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
    // Textarea 높이 자동 조절
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const randomBackgroundColor = getRandomColor();

  return (
    <li className={`flex flex-col gap-1 list-none ${isModify ? 'w-full' : 'w-fit'}`}>
      <div className='flex justify-between items-center gap-2'>
        <span className='text-[15px] font-semibold shrink-0'>{nickName}</span>
        <div className='flex gap-1 items-end'>
          <Typography className='mt-1 text-xs text-gray-600'>{getFormattedDateTime(createdAt)}</Typography>
          {mine &&
            (isModify ? (
              <ButtonGroup size='sm' variant='text' color='white'>
                <Button
                  variant='text'
                  ripple={false}
                  className='px-1 py-0 hover:bg-transparent rounded-none text-xs text-gray-600 font-normal'
                  onClick={() => modifyModal.handleModal()}
                >
                  확인
                </Button>
                <Button
                  variant='text'
                  ripple={false}
                  className='px-1 py-0 hover:bg-transparent rounded-none text-xs text-gray-600 font-normal'
                  onClick={() => setIsModify(false)}
                >
                  취소
                </Button>
              </ButtonGroup>
            ) : (
              <ButtonGroup size='sm' variant='text' color='white'>
                <Button
                  variant='text'
                  ripple={false}
                  className='px-1 py-0 hover:bg-transparent rounded-none text-xs text-gray-600 font-normal'
                  onClick={() => setIsModify(true)}
                >
                  수정
                </Button>
                <Button
                  variant='text'
                  ripple={false}
                  className='px-1 py-0 hover:bg-transparent rounded-none text-xs text-gray-600 font-normal'
                  onClick={() => deleteModal.handleModal()}
                >
                  삭제
                </Button>
              </ButtonGroup>
            ))}
        </div>
      </div>
      {isModify ? (
        <div className='mt-2'>
          <Textarea
            className='w-full min-h-full p-3 text-sm font-normal bg-gray-100 border rounded-lg'
            defaultValue={content.replace(/\n/g, '')}
            label='댓글 수정'
            onChange={handleChangeText}
          />
        </div>
      ) : (
        <Typography
          className='p-3 text-sm font-normal bg-gray-100 border rounded-lg whitespace-pre'
          style={{ backgroundColor: randomBackgroundColor }}
        >
          {content}
        </Typography>
      )}
      <ConfirmCancelModal
        isOpen={modifyModal.isOpen}
        handleModal={modifyModal.handleModal}
        onConfirm={modifyComment}
        message='댓글을 수정합니다.'
      />
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
