import React, { useState, ChangeEvent } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import ContributeList from '@components/ContributeList';
import QuitModal from '@components/QuitModal';

const INFO = {
  groupName: '부산대학교',
  groupNickName: '말차프라페',
  historyList: [
    {
      historyId: 1,
      pageName: '제도관',
      content: {
        index: 6.4,
        name: '4층',
        detail:
          '4층에는 과사가 있다. [1] 참고로 오른쪽으로 도는게 빠르다. 그 외에는 주로 수업에 이용되는 전산실(6408, 6409, 6409-1)과 여러 랩실이 존재한다. 방학에도 4층을 방문하면 피곤해보이는 대학원생을 여럿 목격할 수 있다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 2,
      pageName: '제도냥',
      content: {
        index: 1,
        name: '개요',
        detail:
          '2017년도쯤부터 2021년쯤까지 제도관 앞에서 흔히 볼 수 있었던 고양이. 덩치가 매우 크고(특히 얼굴이) 얼굴이 좌우 대칭으로 생겼다. 2층으로 올라가는 계단 및 중앙 정원에 누워있는 모습을 자주 목격할 수 있었으나 현재는 무지개다리를 건넜다.',
      },
      createAt: '2023.09.14',
    },
  ],
};

const GroupMyPage = () => {
  const navigate = useNavigate();
  const { groupName } = useParams();
  const [nickName, setNickName] = useState(INFO.groupNickName);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState<boolean>(false);

  const handleNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const handleQuitModal = () => {
    setIsQuitModalOpen((prev) => !prev);
  };

  return (
    <main className='max-w-3xl min-w-max mx-auto mt-32 mb-10'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        마이페이지
      </h1>
      <section className='mt-20 p-4'>
        <div className='flex'>
          <span className='text-2xl text-blue-900 font-extrabold'>{groupName}</span>
        </div>
        <div className='flex items-baseline mt-10'>
          <span className='font-extrabold w-40'>그룹 닉네임</span>
          <div className='flex items-center'>
            <Input
              type='text'
              label='그룹 닉네임'
              crossOrigin=''
              disabled
              value={nickName}
              placeholder='그룹 닉네임'
              className='!border !border-gray-400 text-gray-900 rounded-sm placeholder:text-gray-500 focus:!border-gray-900'
              labelProps={{
                className: 'hidden',
              }}
              containerProps={{ className: 'min-w-[100px]' }}
              onChange={handleNickName}
            />
            <Button
              variant='outlined'
              color='gray'
              className='ml-2 rounded-sm font-nanum h-9 w-28 p-1 whitespace-nowrap'
            >
              변경하기
            </Button>
          </div>
        </div>
      </section>
      <section className='p-4 mt-4'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='mb-2 font-extrabold'>내 문서 기여 목록</h3>
          <Button
            variant='outlined'
            className='h-9 w-20 p-1 border-gray-400 text-gray-600 font-nanum whitespace-nowrap rounded-sm'
            onClick={() => navigate('contribute')}
          >
            전체보기
          </Button>
        </div>
        <ContributeList contributeItems={INFO.historyList} />
      </section>
      <div className='text-right p-4'>
        <Button
          variant='outlined'
          color='gray'
          className='p-1 rounded-sm font-nanum border-gray-300 whitespace-nowrap border-none text-red-600 hover:opacity-100 hover:underline decoration-black'
          onClick={handleQuitModal}
        >
          그룹 탈퇴하기
        </Button>
        <QuitModal group={INFO.groupName} isOpen={isQuitModalOpen} onClick={handleQuitModal} />
      </div>
    </main>
  );
};

export default GroupMyPage;
