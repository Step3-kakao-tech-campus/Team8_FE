import React from 'react';
import { Button } from '@material-tailwind/react';
import GroupList from '../components/GroupList';
import { ReactComponent as TextLogo } from '../assets/images/logo/textLogo.svg';
import OfficialGroup from '../components/OfficialGroup';

const HomePage = () => {
  const dummy = [
    {
      groupId: 1,
      groupName: '춘장이1기',
      groupImage:
        'https://i.namu.wiki/i/IUKpnzynPCMlkcs4qRLos3NAnwQu48KLCi7eUXFK0RDyRO1o4rgquRpH2iEJh6G4CGkiGglBWuDp04zsc4Cwww.webp',
    },
    {
      groupId: 2,
      groupName: '카카오테크캠퍼스',
      groupImage:
        'https://image.jtbcplus.kr/data/contents/jam_photo/202210/12/e940c652-d8ff-4faa-bad9-b2a31daa0a33.jpg',
    },
    {
      groupId: 3,
      groupName: 'group3',
      groupImage: 'https://via.placeholder.com/128',
    },
    {
      groupId: 4,
      groupName: 'group4',
      groupImage: 'https://via.placeholder.com/128',
    },
    {
      groupId: 5,
      groupName: 'group5',
      groupImage: 'https://via.placeholder.com/128',
    },
  ];

  const titleStyle = 'font-bold text-lg mb-4 mt-20';

  return (
    <main className='max-w-3xl min-w-max mx-auto my-16'>
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
          {/* TODO: 버튼 기능 구현 필요 */}
          <Button className='rounded font-nanum h-8' size='sm'>
            그룹 생성
          </Button>
        </div>
        <GroupList groups={dummy} />
      </section>
      <section>
        <h2 className={titleStyle}>공식 그룹</h2>
        <OfficialGroup />
      </section>
      <section>
        <h2 className={titleStyle}>그룹 살펴보기</h2>
        <GroupList groups={dummy} />
      </section>
    </main>
  );
};

export default HomePage;
