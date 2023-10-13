import React, { ChangeEvent } from 'react';
import { Textarea } from '@material-tailwind/react';

interface EditorProps {
  content: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

/* TODO 추후 ck editor에 맞게 변경 필요 */
const Editor = ({ content, onChange }: EditorProps) => {
  return (
    <div>
      <Textarea
        className='min-h-[300px] text-[13px] leading-6 bg-white !border !border-gray-400'
        value={content}
        labelProps={{
          className: 'hidden',
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
