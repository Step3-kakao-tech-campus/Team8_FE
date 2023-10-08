import React from 'react';
import { Button } from '@material-tailwind/react';
import { ReactComponent as TextLogo } from '@assets/images/logo/textLogo.svg';
import OfficialGroup from '@components/OfficialGroup';
import GroupList from '@components/GroupList';
import { unOfficialGroupDummyData } from '@dummy/group';

const HomePage = () => {
  const titleStyle = 'font-bold text-lg mb-4 mt-20';

  return (
    <main>
      <section className='flex justify-center items-center mb-10'>
        <div className='text-center'>
          {/* TODO: 메인 로고 import */}
          <h1 className='my-4'>메인 로고</h1>
          <TextLogo className='w-56' />
          <p className='text-sm mt-4'>시간의 흐름; 기록의 증가</p>
          {/* TODO: 검색창 컴포넌트 import */}
          <p className='my-10'>검색창 컴포넌트</p>
        </div>
      </section>

      {/* TODO: 로그인 시에만 나타나도록 설정 */}
      <section>
        <div className='flex justify-between items-baseline'>
          <h2 className={titleStyle}>내 그룹</h2>
          <Button className='rounded font-nanum h-8' size='sm'>
            그룹 생성
          </Button>
        </div>
        <GroupList groups={unOfficialGroupDummyData} />
      </section>
      <section>
        <h2 className={titleStyle}>공식 그룹</h2>
        <OfficialGroup />
      </section>
      <section>
        <h2 className={titleStyle}>그룹 살펴보기</h2>
        <GroupList groups={unOfficialGroupDummyData} />
      </section>
    </main>
  );
};

export default HomePage;
