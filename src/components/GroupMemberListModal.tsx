import React from 'react';

import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { MdClear } from 'react-icons/md';

interface GroupMemberListProps {
  isOpen: boolean;
  handleModal: () => void;
}

const GroupMemberListModal = ({ isOpen, handleModal }: GroupMemberListProps) => {
  return (
    <Dialog open={isOpen} handler={handleModal}>
      <button type='button' className='absolute top-4 right-4' onClick={handleModal}>
        <MdClear className='text-3xl text-black' />
      </button>
      <DialogHeader className='flex-col gap-2'>
        <p className='text-lg'>그룹원을 초대해보세요.</p>
        <p className='text-sm text-gray-600 font-normal'>클릭하여 링크 복사</p>
      </DialogHeader>
      <DialogBody className='flex'>
        <p className='px-4 py-1 bg-blue-gray-50 text-black overflow-auto'>dd</p>
      </DialogBody>
      <DialogFooter>hi</DialogFooter>
    </Dialog>
  );
};

export default GroupMemberListModal;
