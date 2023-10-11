import React from 'react';

import ContributeAccordion from '@components/ContributeAccordion';
import { IconButton, Typography } from '@material-tailwind/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

const MyContributePage = () => {
  const [active, setActive] = React.useState<number>(1);
  // TODO: 데이터 받아와서 마지막 페이지 계산하기
  const lastIndex = 10;

  const next = () => {
    if (active === lastIndex) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

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
      <div className='flex items-center justify-center gap-4 mx-auto'>
        <IconButton size='sm' variant='text' onClick={prev} disabled={active === 1}>
          <MdArrowBack size={15} />
        </IconButton>
        <Typography color='gray' className='font-normal'>
          Page <strong className='text-gray-900'>{active}</strong> of <strong className='text-gray-900'>10</strong>
        </Typography>
        <IconButton size='sm' variant='text' onClick={next} disabled={active === lastIndex}>
          <MdArrowForward size={15} />
        </IconButton>
      </div>
    </section>
  );
};
export default MyContributePage;
