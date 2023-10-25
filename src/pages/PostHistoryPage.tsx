import React from 'react';

import PostHistoryAccordion from '@components/PostHistoryAccordion';
import Pagination from '@components/Pagination';
import { postHistoryDummyData } from '@dummy/page';

const PostHistoryPage = () => {
  const [active, setActive] = React.useState<number>(1);

  return (
    <section className='max-w-3xl sm:w-[90vw] mx-auto'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        &quot;{postHistoryDummyData.currentTitle}&quot; 글의 히스토리
      </h1>
      <div className='mt-16 mb-10'>
        <PostHistoryAccordion historyList={postHistoryDummyData.historyList} />
      </div>
      <Pagination active={active} setActive={setActive} lastIndex={5} />
    </section>
  );
};

export default PostHistoryPage;
