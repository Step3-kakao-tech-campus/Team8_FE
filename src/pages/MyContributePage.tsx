import React from 'react';

import ContributeAccordion from '@components/MyPage/ContributeAccordion';
import Pagination from '@components/Common/Pagination';

// TODO: API 수정 후 맞춰서 수정 필요
const lastIndex = 10;

const MyContributePage = () => {
  const [active, setActive] = React.useState<number>(1);

  return (
    <section>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        내 문서 기여 목록
      </h1>
      <div className='mt-16 mb-10'>
        <div className='flex justify-between px-4 py-1 mb-1 bg-gray-100 text-sm font-semibold text-gray-700'>
          <span>문서</span>
          <span>수정 날짜</span>
        </div>
        <ContributeAccordion />
      </div>
      <Pagination active={active} setActive={setActive} lastIndex={lastIndex} />
    </section>
  );
};
export default MyContributePage;
