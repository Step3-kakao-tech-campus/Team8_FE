import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, Card, CardBody, Input, Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { PAGE_KEYS } from '@constants/queryKeys';
import { checkPageExistence } from '@apis/pageApi';
import { queryClient } from '@apis/queryClient';

interface AddLinkModalProps {
  onSave: (linkText: string, linkURL: string) => void;
  isOpen: boolean;
  handleModal: () => void;
}

const AddLinkModal = ({ onSave, isOpen, handleModal }: AddLinkModalProps) => {
  const [pageName, setPageName] = useState('');
  const [isExistence, setIsExistence] = useState(false);

  const { groupId } = useParams();
  const numGroupId = Number(groupId);

  const { isLoading } = useQuery({
    queryKey: PAGE_KEYS.isExistence({ groupId: numGroupId, title: pageName }),
    queryFn: () => checkPageExistence({ groupId: numGroupId, title: pageName }),
    onError: () => {
      setIsExistence(false);
    },
    // 존재하는 페이지인 경우
    onSuccess: (data) => {
      if (data.status === 404) {
        setIsExistence(false);
      } else setIsExistence(true);
    },
  });

  const handlePageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);

    // 내용이 바뀔 때마다 쿼리를 다시 보내기
    if (e.target.value !== '') {
      queryClient.invalidateQueries(PAGE_KEYS.isExistence({ groupId: numGroupId, title: e.target.value }));
    }
  };

  const handleSave = () => {
    if (isLoading) return;
    if (pageName === '') return;
    if (isExistence) {
      onSave(`#${pageName}`, `/${groupId}/${pageName}`);
    } else {
      onSave(`#${pageName}`, `/${groupId}/search?keyword=${pageName}`);
    }
    handleModal();
  };

  return (
    <Dialog open={isOpen} handler={handleModal} size='sm' className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full min-w-fit max-w-fit'>
        <CardBody className='flex gap-4 text-black text-center items-center w-fit'>
          <div className='flex flex-col gap-3 min-w-[260px]'>
            <Input
              type='text'
              label={isExistence ? '입력한 페이지를 찾았어요' : '페이지 검색'}
              size='md'
              value={pageName}
              crossOrigin={undefined}
              onChange={handlePageNameChange}
              color={isExistence ? 'gray' : 'blue'}
              required
            />
            <p className='text-xs font-normal'>
              {isExistence ? '가장 아래에 페이지 태그가 추가됩니다.' : '페이지가 없는 경우 검색 결과로 이동합니다.'}
            </p>
          </div>
          <div className='w-fit'>
            <Button ripple={false} type='submit' onClick={handleSave} disabled={!pageName}>
              확인
            </Button>
          </div>
        </CardBody>
      </Card>
    </Dialog>
  );
};

export default AddLinkModal;
