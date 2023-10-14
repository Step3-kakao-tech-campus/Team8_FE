import React from 'react';
import { CKEditor as Editor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import './Editor.css';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const CKEditor = ({ content, onChange }: EditorProps) => {
  return (
    <div className='mb-4'>
      <Editor
        editor={CustomEditor}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
          onChange(data);
        }}
      />
    </div>
  );
};

export default CKEditor;
