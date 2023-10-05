import React from 'react';

interface ContributeItemContent {
  index: number;
  name: string;
  detail: string;
}

interface ContributeItemProps {
  historyId: number;
  pageName: string;
  content: ContributeItemContent;
  createAt: string;
}

const ContributeItem = ({ contributeItem }: { contributeItem: ContributeItemProps }) => {
  return (
    <li className='pb-2 border-b border-gray-400 cursor-pointer'>
      <div className='flex justify-between items-baseline'>
        <p className='font-semibold'>
          {contributeItem.pageName} /<span className='mx-2 text-red-500'>{contributeItem.content.index}.</span>
          {contributeItem.content.name}
        </p>
        <span className='text-sm text-gray-400'>{contributeItem.createAt}</span>
      </div>
      <p className='pt-2 max-w-[702px] text-sm line-clamp-2'>{contributeItem.content.detail}</p>
    </li>
  );
};

export default ContributeItem;
