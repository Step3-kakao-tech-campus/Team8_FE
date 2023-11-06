import React from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, Card, CardBody, Input, Button } from '@material-tailwind/react';
import { useQuery } from '@tanstack/react-query';
import { PAGE_KEYS } from '@constants/queryKeys';
import { checkPageExistence } from '@apis/pageApi';
import { AxiosError } from 'axios';
import { getErrorMsg } from '@utils/serverError';
import { queryClient } from '@apis/queryClient';

interface AddLinkModalProps {
  onSave: (linkText: string, linkURL: string) => void;
  isOpen: boolean;
  handleModal: () => void;
}

const AddLinkModal = ({ onSave, isOpen, handleModal }: AddLinkModalProps) => {
  const [linkText, setLinkText] = React.useState('');
  const [pageName, setPageName] = React.useState('');
  const [isExistence, setIsExistence] = React.useState(false);

  const { groupId } = useParams();
  const numGroupId = Number(groupId);

  const { isLoading } = useQuery({
    queryKey: PAGE_KEYS.isExistence({ groupId: numGroupId, title: pageName }),
    queryFn: () => checkPageExistence({ groupId: numGroupId, title: pageName }),
    onError: (error: AxiosError) => {
      // 존재하지 않는 페이지인 경우
      if (getErrorMsg(error) === '존재하지 않는 페이지 입니다.') {
        setIsExistence(false);
      }
    },
    // 존재하는 페이지인 경우
    onSuccess: () => {
      setIsExistence(true);
    },
  });

  const handleLinkTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkText(e.target.value);
  };

  const handlePageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);

    // 내용이 바뀔 때마다 쿼리를 다시 보내기
    if (e.target.value !== '') {
      queryClient.invalidateQueries(PAGE_KEYS.isExistence({ groupId: numGroupId, title: e.target.value }));
    }
  };

  const handleSave = () => {
    if (isLoading) return;
    if (linkText === '' || pageName === '') return;
    if (isExistence) {
      onSave(`#${linkText}`, `/${groupId}/${pageName}`);
    } else {
      onSave(`#${linkText}`, `/${groupId}/search?keyword=${pageName}`);
    }
    handleModal();
  };

  return (
    <Dialog open={isOpen} handler={handleModal} size='sm' className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full max-w-fit'>
        <CardBody className='flex gap-4 text-black text-center items-center w-fit'>
          <div className='flex flex-col gap-3 w-[260px]'>
            <Input
              type='text'
              label='링크 이름'
              size='md'
              value={linkText}
              crossOrigin={undefined}
              onChange={handleLinkTextChange}
              required
            />
            <Input
              type='text'
              label={isExistence ? '해당 페이지 태그' : '페이지 검색'}
              size='md'
              value={pageName}
              crossOrigin={undefined}
              onChange={handlePageNameChange}
              color={isExistence ? 'gray' : 'red'}
              required
            />
            <p className='text-xs font-normal'>
              {isExistence ? '가장 아래에 페이지 태그가 추가됩니다.' : '페이지가 없는 경우 검색 결과로 이동합니다.'}
            </p>
          </div>
          <div className='w-fit'>
            <Button type='submit' onClick={handleSave} disabled={!linkText || !pageName}>
              확인
            </Button>
          </div>
        </CardBody>
      </Card>
    </Dialog>
  );
};

export default AddLinkModal;
