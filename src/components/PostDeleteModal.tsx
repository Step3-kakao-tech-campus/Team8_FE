import React, { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button, Checkbox } from '@material-tailwind/react';

interface PostDeleteModalProps {
  title: string;
  isOpen: boolean;
  onClickModal: () => void;
}

const CONFIRMTEXT = '위의 내용을 확인하였으며 삭제 동의';

const PostDeleteModal = ({ title, isOpen, onClickModal }: PostDeleteModalProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  const handleDeleteClick = () => {
    if (!isChecked) return;
    onClickModal();
    // 이부분은 실제 코드 만들때 삭제!
    handleCheck();
  };

  return (
    <Dialog open={isOpen} size='xs' handler={onClickModal}>
      <DialogHeader className='text-xl'>
        <p>
          정말 <span className='text-red-600'>[{title}]</span> 포스트를 삭제하시겠습니까?
        </p>
      </DialogHeader>
      <DialogBody className='pb-0 text-black font-normal'>
        <p className='mb-2'>
          포스트를 삭제하면 복구할 수 없으며, <br />
          포스트에 해당하는 내용과 히스토리가 모두 삭제됩니다.
        </p>
        <Checkbox
          label={CONFIRMTEXT}
          ripple={false}
          checked={isChecked}
          crossOrigin=''
          className='rounded-sm w-4 h-4 hover:before:bg-transparent before:bg-transparent before:w-5 before:h-5'
          labelProps={{
            className: 'text-black text-sm',
          }}
          onClick={handleCheck}
        />
      </DialogBody>
      <DialogFooter className='pt-0'>
        <Button variant='text' ripple={false} color='red' onClick={handleDeleteClick} className='mr-1'>
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
