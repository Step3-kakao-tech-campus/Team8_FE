import React from 'react';
import { useParams } from 'react-router-dom';
import { Dialog, Card, CardBody, Input, Button } from '@material-tailwind/react';

interface AddLinkModalProps {
  onSave: (linkText: string, linkURL: string) => void;
  isOpen: boolean;
  handleModal: () => void;
}

const AddLinkModal = ({ onSave, isOpen, handleModal }: AddLinkModalProps) => {
  const [linkText, setLinkText] = React.useState('');
  const [pageName, setPageName] = React.useState('');

  const { groupId } = useParams();

  const handleLinkTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkText(e.target.value);
  };

  const handlePageNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageName(e.target.value);
  };

  const handleSave = () => {
    onSave(`@${linkText}`, `/${groupId}/${pageName}`);
    handleModal();
  };

  return (
    <Dialog open={isOpen} handler={handleModal} size='xs' className='bg-transparent shadow-none'>
      <Card className='mx-auto w-full max-w-fit'>
        <CardBody className='flex gap-4 text-black text-center items-center w-fit'>
          <div className='flex flex-col gap-3'>
            <Input type='text' label='링크 이름' size='md' crossOrigin={undefined} onChange={handleLinkTextChange} />
            <Input
              type='text'
              label='멘션할 페이지(페이지 이름)'
              size='md'
              crossOrigin={undefined}
              onChange={handlePageNameChange}
            />
          </div>
          <div className='w-fit'>
            <Button onClick={handleSave}>확인</Button>
          </div>
        </CardBody>
      </Card>
    </Dialog>
  );
};

export default AddLinkModal;
