import React, { ChangeEvent, useState } from 'react';
import useModal from '@hooks/useModal';
import { Button, Input } from '@material-tailwind/react';
import GroupList from '@components/GroupList';
import { unOfficialGroupDummyData, groupMyPageDummyData } from '@dummy/group';
import PasswordChangeModal from '@components/PasswordChangeModal';

const MyPage = () => {
  const [nickName, setNickName] = useState(groupMyPageDummyData.groupNickName);
  const [isNickNameChanging, setIsNickNameChanging] = useState<boolean>(false);
  const passwordChangeModal = useModal();

  const handleNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const handleNickNameChage = () => {
    setIsNickNameChanging((prev) => !prev);
  };

  return (
    <div className='mb-10'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        마이페이지
      </h1>
      <div className='mt-20 p-4'>
        <div className='flex items-baseline'>
          <span className='font-extrabold w-40'>대표 닉네임</span>
          <div className='flex items-center grow'>
            <Input
              type='text'
              label='대표 닉네임'
              value={nickName}
              crossOrigin={undefined}
              placeholder='대표 닉네임'
              className='!border !border-t-blue-gray-200 text-gray-900 rounded-sm placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900'
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
        <div className='flex items-baseline mt-10'>
          <span className='font-extrabold w-40'>비밀번호 변경</span>
          <Button
            variant='outlined'
            color='gray'
            className='rounded-sm h-9 w-20 p-1 whitespace-nowrap'
            onClick={passwordChangeModal.handleModal}
          >
            바로가기
          </Button>
          <p className='text-xs text-gray-700 ml-4'>카카오톡 간편 회원은 지원하지 않는 기능입니다.</p>
        </div>
        <PasswordChangeModal isOpen={passwordChangeModal.isOpen} handleOpen={passwordChangeModal.handleModal} />
        <div className='flex items-baseline mt-10 mb-10'>
          <span className='font-extrabold w-40'>내 그룹 보기</span>
          <p className='text-xs text-gray-700'>프로필을 누르면 그룹으로 이동합니다.</p>
        </div>
        <GroupList groups={unOfficialGroupDummyData} />
      </div>
    </div>
  );
};

export default MyPage;
