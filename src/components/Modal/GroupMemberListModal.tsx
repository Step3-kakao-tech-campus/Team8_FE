import React from 'react';
import { Dialog, DialogHeader, DialogBody, List, ListItem } from '@material-tailwind/react';
import { MdClear } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import { GROUP_KEYS } from '@constants/queryKeys';
import { getGroupMemberFn } from '@apis/groupApi';

interface GroupMemberListProps {
  isOpen: boolean;
  handleModal: () => void;
  groupId: string;
}

const GroupMemberListModal = ({ isOpen, handleModal, groupId }: GroupMemberListProps) => {
  const { data, isLoading } = useQuery({
    queryKey: GROUP_KEYS.members({ groupId: Number(groupId) }),
    queryFn: () => getGroupMemberFn(Number(groupId)),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
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
          {data.nickNames.map((nickName: string) => (
            <ListItem key={uuidv4()}>{nickName}</ListItem>
          ))}
        </List>
      </DialogBody>
    </Dialog>
  );
};

export default GroupMemberListModal;
