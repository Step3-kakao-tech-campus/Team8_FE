import React, { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Checkbox } from '@material-tailwind/react';
import { useMutation } from '@tanstack/react-query';
import { deletePostFn } from '@apis/postApi';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface PostDeleteModalProps {
  title: string;
  isOpen: boolean;
  onClickModal: () => void;
  groupId: number;
  postId: number;
  pageName: string;
}

const CONFIRMTEXT = '위의 내용을 확인하였으며 삭제 동의';

const PostDeleteModal = ({ title, isOpen, onClickModal, groupId, postId, pageName }: PostDeleteModalProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigate = useNavigate();

  const { mutate: deletePost } = useMutation({
    mutationFn: () => deletePostFn({ groupId, postId }),
    onSuccess: () => {
      onClickModal();
      navigate(`/${groupId}/${encodeURIComponent(pageName)}`, { replace: true });
    },
    onError: (error: AxiosError) => {
      // 에러 처리, 삭제 버튼 위에 tip으로 미리 해당사항 알려주기
      if (error.response && error.response.status === 400) {
        setErrorMessage('하위문서를 모두 삭제한 후 진행해주세요.');
      } else {
        // 그룹 또는 페이지가 없거나 회원이 아니거나 하는 경우 모두 404로 처리
        alert('잘못된 요청입니다.');
        onClickModal();
        navigate('/404', { replace: true });
      }
    },
  });

  const handleDeleteClick = () => {
    if (!isChecked) return;
    deletePost();
  };

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Dialog open={isOpen} size='sm' handler={onClickModal}>
      <DialogHeader className='justify-center text-lg'>
        <p>
          정말 <span className='text-red-600'>[{title}]</span> 포스트를 삭제하시겠습니까?
        </p>
      </DialogHeader>
      <DialogBody className='flex flex-col items-center pb-0 text-black font-normal'>
        <p className='text-center text-gray-800 mb-2'>
          포스트를 삭제하면 <span className='text-black font-semibold'>복구할 수 없으며</span>,
          <br /> 포스트에 해당하는 <span className='text-black font-semibold'>내용과 히스토리가 모두 삭제</span>됩니다.
        </p>
        {errorMessage && <p className='text-center text-red-600 mb-2 font-bold bg-red-50 px-2'>{errorMessage}</p>}
        <Checkbox
          label={CONFIRMTEXT}
          ripple={false}
          crossOrigin=''
          className='rounded-sm w-4 h-4 hover:before:bg-transparent before:bg-transparent before:w-5 before:h-5'
          labelProps={{
            className: 'text-gray-600 text-sm',
          }}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </DialogBody>
      <DialogFooter className='pt-0'>
        <Button
          variant='filled'
          ripple={false}
          color={isChecked ? 'red' : 'gray'}
          onClick={handleDeleteClick}
          className='mr-1'
          disabled={!isChecked}
        >
          <span>삭제</span>
        </Button>
        <Button variant='filled' ripple={false} onClick={onClickModal}>
          <span>취소</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default PostDeleteModal;
