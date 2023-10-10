import React from 'react';
import { Button } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import OfficialGroup from '@components/OfficialGroup';
import GroupList from '@components/GroupList';
import { unOfficialGroupDummyData } from '@dummy/group';
import { ReactComponent as Logo } from '@assets/images/logo/logo.svg';
import SearchInput from '@components/SearchInput';
import { useRecoilValue } from 'recoil';
import isLoggedInState from '@recoil/login/atoms';
import { useNavigate } from 'react-router-dom';

const titleStyle = 'font-bold text-lg mb-4 mt-20';

const HomePage = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();

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
            <GroupList groups={unOfficialGroupDummyData} />
          </section>
          <section>
            <h2 className={titleStyle}>공식 그룹</h2>
            <OfficialGroup />
          </section>
        </div>
      )}
      <section>
        <h2 className={titleStyle}>그룹 살펴보기</h2>
        <GroupList groups={unOfficialGroupDummyData} />
      </section>
    </main>
  );
};

export default HomePage;
