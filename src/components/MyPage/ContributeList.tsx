import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContributeItem from './ContributeItem';

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

const ContributeList = ({ contributeItems }: { contributeItems: ContributeItemProps[] }) => {
  return (
    <article className='p-4 max-h-[503px] border border-gray-400 overflow-y-auto'>
      <ul className='flex flex-col gap-4'>
        {contributeItems.slice(0, 3).map((contributeItem) => (
          <ContributeItem key={uuidv4()} contributeItem={contributeItem} />
        ))}
      </ul>
    </article>
  );
};

export default ContributeList;