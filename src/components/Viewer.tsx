import React from 'react';

interface ViewerProps {
  content: string;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const Viewer = ({ content }: ViewerProps) => {
  return <div className='mb-8'>{content}</div>;
};

export default Viewer;
