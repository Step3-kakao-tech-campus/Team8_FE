import React, { useState, ChangeEvent } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import ContributeList from '@components/ContributeList';
import QuitModal from '@components/QuitModal';
import { groupMyPageDummyData } from '@dummy/group';

const GroupMyPage = () => {
  const navigate = useNavigate();
  const { groupName } = useParams();
  const [nickName, setNickName] = useState(groupMyPageDummyData.groupNickName);
  const [isNickNameChanging, setIsNickNameChanging] = useState<boolean>(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState<boolean>(false);

  const handleNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };
  const handleQuitModal = () => {
    setIsQuitModalOpen((prev) => !prev);
  };
  const handleNickNameChage = () => {
    setIsNickNameChanging((prev) => !prev);
  };

  return (
    <main className='mb-10'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        마이페이지
      </h1>
      <section className='mt-20 p-4'>
        <div className='flex'>
          <span className='text-2xl text-blue-900 font-extrabold'>{groupName}</span>
        </div>
        <div className='flex items-center mt-10'>
          <span className='font-extrabold w-40'>그룹 닉네임</span>
          <div className='flex items-center grow'>
            <Input
              type='text'
              label='그룹 닉네임'
              crossOrigin=''
              disabled={!isNickNameChanging}
              value={nickName}
              placeholder='그룹 닉네임'
              className='!border !border-gray-400 text-gray-900 rounded-sm placeholder:text-gray-500 focus:!border-gray-900'
              labelProps={{
                className: 'hidden',
              }}
              containerProps={{ className: 'min-w-[100px] max-w-[240px]' }}
              onChange={handleNickName}
            />
            {isNickNameChanging ? (
              <>
                {/* 취소, 변경처리는 api되면 생각해보기로.. */}
                <Button
                  variant='outlined'
                  color='gray'
                  className='ml-4 rounded-sm py-[11px] whitespace-nowrap'
                  onClick={handleNickNameChage}
                >
                  취소
                </Button>
                <Button
                  variant='outlined'
                  color='gray'
                  className='ml-2 rounded-sm py-[11px] whitespace-nowrap'
                  onClick={handleNickNameChage}
                >
                  변경하기
                </Button>
              </>
            ) : (
              <Button
                variant='outlined'
                color='gray'
                className='ml-4 rounded-sm py-[11px] whitespace-nowrap'
                onClick={handleNickNameChage}
              >
                변경하기
              </Button>
            )}
          </div>
        </div>
      </section>
      <section className='p-4 mt-4'>
        <div className='flex justify-between items-center mb-2'>
          <h3 className='mb-2 font-extrabold'>내 문서 기여 목록</h3>
          <Button
            variant='outlined'
            className='h-9 w-20 p-1 border-gray-400 text-gray-600 whitespace-nowrap rounded-sm'
            onClick={() => navigate('contribute')}
          >
            전체보기
          </Button>
        </div>
        <ContributeList contributeItems={groupMyPageDummyData.historyList} />
      </section>
      <div className='text-right p-4'>
        <Button
          variant='outlined'
          color='gray'
          className='p-1 rounded-sm border-gray-300 whitespace-nowrap border-none text-red-600 hover:opacity-100 hover:underline decoration-black'
          onClick={handleQuitModal}
        >
          그룹 탈퇴하기
        </Button>
        <QuitModal group={groupName} isOpen={isQuitModalOpen} onClick={handleQuitModal} />
      </div>
    </main>
  );
};

export default GroupMyPage;
