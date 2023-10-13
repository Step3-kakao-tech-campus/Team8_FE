import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const Editor = ({ content, onChange }: EditorProps) => {
  return (
    <div>
      <CKEditor
        editor={CustomEditor}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
};

export default Editor;
