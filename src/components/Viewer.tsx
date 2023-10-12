import React from 'react';

interface ViewerProps {
  content: string;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const Viewer = ({ content }: ViewerProps) => {
  return <div className='mb-8 text-[13px] leading-6'>{content}</div>;
};

export default Viewer;
