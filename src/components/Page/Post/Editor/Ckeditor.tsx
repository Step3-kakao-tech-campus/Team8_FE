import React from 'react';
import { CKEditor as Editor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import './Editor.css';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
}

const CKEditor = ({ content, onChange }: EditorProps) => {
  return (
    <div className='mb-4'>
      <Editor
        editor={CustomEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
};

export default CKEditor;
