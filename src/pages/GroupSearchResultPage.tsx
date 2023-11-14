import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import GroupList from '@components/Home/GroupList';
import { Link, useSearchParams } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { GROUP_KEYS } from '@constants/queryKeys';
import { groupSearchFn } from '@apis/groupApi';

const GroupSearchResultPage = () => {
  const [isOfficialGroup, setIsOfficialGroup] = useState<boolean>(true);
  const [searchParam] = useSearchParams();
  const keyword = searchParam.get('keyword') || '테스트 키워드';
  const { data } = useQuery({
    queryKey: GROUP_KEYS.groupSearch({ keyword }),
    queryFn: async () => groupSearchFn({ keyword }),
  });

  const officialGroups = data?.officialGroups || [];
  const unOfficialGroups = data?.unofficialOpenedGroups || [];
  const groupData = isOfficialGroup ? officialGroups : unOfficialGroups;
  return (
    <section className='pb-20'>
      <h1 className='mb-8'>
        &apos;<span className='text-xl font-bold'>{keyword}</span>&apos;에 대한 검색 결과입니다.
      </h1>
      <div className='flex gap-2 h-9'>
        <Button
          variant={isOfficialGroup ? 'filled' : 'outlined'}
          size='sm'
          color='gray'
          ripple={false}
          className='rounded-full'
          onClick={() => setIsOfficialGroup(true)}
        >
          공식 그룹
        </Button>
        <Button
          variant={isOfficialGroup ? 'outlined' : 'filled'}
          size='sm'
          color='gray'
          ripple={false}
          className='rounded-full'
          onClick={() => setIsOfficialGroup(false)}
        >
          비공식 그룹
        </Button>
      </div>
      {groupData.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-[300px]'>
          <h1 className='mb-2 text-xl font-bold'>관련된 그룹이 없어요.</h1>
          {!isOfficialGroup && (
            <Link to='/groupCreate' className='mt-2 text-sm text-gray-400 hover:text-blue-300'>
              <span>새로운 그룹 만들러 가기</span>
              <MdChevronRight className='inline-block' width={15} height={15} />
            </Link>
          )}
        </div>
      ) : (
        <GroupList groups={groupData} />
      )}
    </section>
  );
};

export default GroupSearchResultPage;
