import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import GroupList from '@components/GroupList';
import { officialGroupDummyData, unOfficialGroupDummyData } from '@dummy/group';
import { useSearchParams } from 'react-router-dom';

const GroupSearchResultPage = () => {
  const [isOfficialGroup, setIsOfficialGroup] = useState<boolean>(true);
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get('keyword') || '테스트 키워드';

  return (
    <section className='max-w-3xl min-w-max mx-auto my-40'>
      <h1 className='mb-8'>
        &apos;<span className='text-xl font-bold'>{keyword}</span>&apos;에 대한 검색 결과입니다.
      </h1>
      <div className='flex gap-2'>
        <Button
          variant={isOfficialGroup ? 'filled' : 'outlined'}
          size='sm'
          color='gray'
          ripple={false}
          className='rounded-full font-nanum'
          onClick={() => setIsOfficialGroup(true)}
        >
          공식 그룹
        </Button>
        <Button
          variant={isOfficialGroup ? 'outlined' : 'filled'}
          size='sm'
          color='gray'
          ripple={false}
          className='rounded-full font-nanum'
          onClick={() => setIsOfficialGroup(false)}
        >
          비공식 그룹
        </Button>
      </div>
      <GroupList groups={isOfficialGroup ? officialGroupDummyData : unOfficialGroupDummyData} />
    </section>
  );
};

export default GroupSearchResultPage;
