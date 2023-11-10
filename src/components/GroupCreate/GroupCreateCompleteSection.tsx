import React, { useEffect, useState } from 'react';
import { Alert, Button, Input, Typography } from '@material-tailwind/react';
import { MdContentCopy } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { createGroupFn } from '@apis/groupApi';
import { useRecoilValue } from 'recoil';
import { groupCreateInfoState } from '@recoil/atoms/group';
import { useMutation } from '@tanstack/react-query';
import { createPageFn } from '@apis/pageApi';
import useAlert from '@hooks/useAlert';

interface GroupCreateCompleteSectionProps {
  groupName: string;
}

const GroupCreateCompleteSection = ({ groupName }: GroupCreateCompleteSectionProps) => {
  const { isOpen: isAlertOpen, setIsOpen: setIsAlertOpen } = useAlert();
  const { isOpen: isErrorAlertOpen, setIsOpen: setIsErrorAlertOpen } = useAlert();
  const [inviteCode, setInviteCode] = useState<string>('');
  const [groupId, setGroupId] = useState<number>(0);
  const groupInfo = useRecoilValue(groupCreateInfoState);
  const navigate = useNavigate();

  const { mutateAsync: createPageMutate } = useMutation({
    mutationFn: createPageFn,
  });
  const { mutateAsync: createGroupMutate } = useMutation({
    mutationFn: () => createGroupFn(groupInfo),
    onSuccess: (response) => {
      setInviteCode(`${process.env.REACT_APP_API_URL}/invite/${response.inviteCode}`);
      setGroupId(response.groupId);
      createPageMutate({ groupId: response.groupId, pageName: response.groupName });
    },
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setIsAlertOpen(true);
    } catch {
      setIsErrorAlertOpen(true);
    }
  };
  const handleStartClick = () => {
    navigate(`/${groupId}/${groupName}`, { replace: true });
  };

  useEffect(() => {
    createGroupMutate();
  }, []);

  return (
    <section className='space-y-10 max-w-xl'>
      <div>
        <Typography variant='lead'>
          <strong>{groupName}</strong> 그룹이 생성되었습니다!
        </Typography>
        <Typography variant='paragraph'>초대 링크를 통해 그룹원을 초대해보세요.</Typography>
      </div>
      <Input
        className='outline-none cursor-pointer'
        label='초대 링크'
        value={inviteCode}
        size='lg'
        readOnly
        crossOrigin=''
        icon={<MdContentCopy onClick={handleCopy} className='cursor-pointer' />}
        onClick={handleCopy}
      />
      <div className='flex justify-end'>
        <Button onClick={handleStartClick}>시작하기</Button>
      </div>
      <Alert
        className='py-3 text-sm fixed top-10 z-30 max-w-xl min-w-max mx-auto bg-gray-200 text-gray-600'
        open={isAlertOpen}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        초대코드가 복사되었습니다.
      </Alert>
      <Alert
        className='py-3 text-sm fixed top-10 z-30 max-w-xl min-w-max mx-auto bg-gray-200 text-gray-600'
        open={isErrorAlertOpen}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
      >
        죄송합니다. 다시 시도해주세요.
      </Alert>
    </section>
  );
};

export default GroupCreateCompleteSection;
