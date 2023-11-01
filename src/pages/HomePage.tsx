import React from 'react';
import { Button } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import OfficialGroup from '@components/Home/OfficialGroup';
import GroupList from '@components/Home/GroupList';
import { ReactComponent as Logo } from '@assets/images/logo/logo.svg';
import SearchInput from '@components/Common/SearchInput';
import { useRecoilValue } from 'recoil';
import tokenState from '@recoil/atoms/auth';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MAIN_KEYS } from '@constants/queryKeys';
import { getGroupListFn } from '@apis/mainApi';
import { MainGroups } from '@apis/dto';

const titleStyle = 'font-bold text-lg mb-4 mt-20';

const HomePage = () => {
  const isLoggedIn = Boolean(useRecoilValue(tokenState));
  const navigate = useNavigate();
  const { data: groupList } = useQuery<MainGroups>({ queryKey: MAIN_KEYS.main, queryFn: getGroupListFn });

  return (
    <main>
      <section className='flex justify-center items-center mb-10'>
        <div className='text-center'>
          <Logo fill='black' width='50px' height='50px' className='mx-auto mb-4' />
          <TextLogo className='w-56 mx-auto' />
          <p className='text-sm mt-4'>시간의 흐름; 기록의 증가</p>
        </div>
      </section>
      <section className='mb-14'>
        <SearchInput isLoggedIn={false} className='!mx-auto mt-10 !max-w-md' />
      </section>
      {isLoggedIn && (
        <div>
          <section>
            <div className='flex justify-between items-baseline'>
              <h2 className={titleStyle}>내 그룹</h2>
              <Button className='rounded h-8' size='sm' onClick={() => navigate('/groupCreate')}>
                그룹 생성
              </Button>
            </div>
            {groupList && groupList.myGroup.length > 0 ? (
              <GroupList groups={groupList.myGroup} />
            ) : (
              <p className='text-center my-10'>참여한 그룹이 없습니다.</p>
            )}
          </section>
          <section>
            <h2 className={titleStyle}>공식 그룹</h2>
            {groupList && groupList.officialGroup.length > 0 ? (
              <OfficialGroup officialGroups={groupList.officialGroup} />
            ) : (
              <p className='text-center my-10'>등록된 공식 그룹이 없습니다.</p>
            )}
          </section>
        </div>
      )}
      <section>
        <h2 className={titleStyle}>그룹 살펴보기</h2>
        {groupList && groupList.unOfficialGroup.length > 0 ? (
          <GroupList groups={groupList.unOfficialGroup} />
        ) : (
          <p className='text-center my-10'>등록된 그룹이 없습니다.</p>
        )}
      </section>
    </main>
  );
};

export default HomePage;
