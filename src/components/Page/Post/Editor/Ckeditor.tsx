import React from 'react';
import { CKEditor as Editor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import './Editor.css';
import { IconButton, Tooltip } from '@material-tailwind/react';
import { MdAddLink } from 'react-icons/md';
import useModal from '@hooks/useModal';
import AddLinkModal from '@components/Modal/AddLinkModal';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
}

const CKEditor = ({ content, onChange }: EditorProps) => {
  const pageLinkModal = useModal();

  const handleAddLink = (linkText: string, linkURL: string) => {
    const currentData = content;
    const newData = `${currentData}<a href="${linkURL}">${linkText}</a>`;
    onChange(newData.replace(/\r?\n|\r/g, ''));
  };

  return (
    <div className='mb-4'>
      <div className='relative md:top-9 md:right-2 text-right sm:top-0 sm:right-1'>
        <Tooltip
          content={<p>다른 페이지를 태그해보세요.&nbsp;페이지 생성은 태그 후에 해도 괜찮아요.</p>}
          placement='top-end'
          className='border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-black'
        >
          <IconButton
            size='sm'
            variant='text'
            color='blue'
            onClick={pageLinkModal.handleModal}
            className='z-40 rounded-sm hover:bg-gray-200'
          >
            <MdAddLink size={20} />
          </IconButton>
        </Tooltip>
      </div>

      <Editor
        editor={CustomEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />

      {pageLinkModal.isOpen && (
        <AddLinkModal isOpen={pageLinkModal.isOpen} handleModal={pageLinkModal.handleModal} onSave={handleAddLink} />
      )}
    </div>
  );
};

export default CKEditor;
