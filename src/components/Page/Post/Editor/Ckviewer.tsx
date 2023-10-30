import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import CustomEditor from 'ckeditor5-custom-build/build/ckeditor';
import './Editor.css';

interface ViewerProps {
  content: string;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const Viewer = ({ content }: ViewerProps) => {
  return (
    <div className='mb-4'>
      <CKEditor
        id='viewer'
        editor={CustomEditor}
        data={content}
        disabled
        onReady={(editor) => {
          const toolbarElement = editor.ui.view.toolbar.element;
          if (editor.isReadOnly && toolbarElement) {
            toolbarElement.style.display = 'none';
          }
        }}
      />
    </div>
  );
};

export default Viewer;
