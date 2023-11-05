import React from 'react';
import './Editor.css';

interface ViewerProps {
  content: string;
}

/* eslint-disable react/no-danger */
const Viewer = ({ content }: ViewerProps) => {
  return (
    <div className='mb-4 px-1 py-2'>
      <div className='ck-content ck-read-only' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Viewer;
