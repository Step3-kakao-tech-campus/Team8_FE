import React from 'react';

import { Dialog, DialogHeader, DialogBody, List, ListItem } from '@material-tailwind/react';
import { MdClear } from 'react-icons/md';
import { groupMember } from '@dummy/group';

interface GroupMemberListProps {
  isOpen: boolean;
  handleModal: () => void;
}

const GroupMemberListModal = ({ isOpen, handleModal }: GroupMemberListProps) => {
  return (
    <Dialog size='xs' open={isOpen} handler={handleModal}>
      <button type='button' className='absolute top-4 right-4' onClick={handleModal}>
        <MdClear className='text-3xl text-black' />
      </button>
      <DialogHeader className='flex-col gap-2 border-b'>
        <p className='text-lg'>그룹원 보기</p>
      </DialogHeader>
      <DialogBody className=' h-96 overflow-y-auto'>
        <List>
          {/* TODO: 키 값 여기도 처리해주세요 */}
          {groupMember.map((member) => (
            <ListItem key={member}>{member}</ListItem>
          ))}
        </List>
      </DialogBody>
    </Dialog>
  );
};

export default GroupMemberListModal;
