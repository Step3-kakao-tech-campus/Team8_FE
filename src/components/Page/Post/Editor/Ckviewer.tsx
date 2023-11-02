import React from 'react';
import './Editor.css';

interface ViewerProps {
  content: string;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const Viewer = ({ content }: ViewerProps) => {
  return (
    <div className='mb-4 px-1 py-2'>
      <div className='ck-content ck-read-only' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Viewer;
