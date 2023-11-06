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
    console.log(content);
  };

  return (
    <div className='mb-4'>
      <div className='relative md:top-9 md:right-2 text-right sm:top-0 sm:right-1'>
        <Tooltip
          content={<p>페이지를 링크해보세요.&nbsp;이름만으로도 링크가 가능합니다.</p>}
          placement='top-end'
          className='border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10 text-black'
        >
          <IconButton
            size='sm'
            variant='text'
            color='blue'
            onClick={pageLinkModal.handleModal}
            className='z-50 rounded-sm hover:bg-gray-200'
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
