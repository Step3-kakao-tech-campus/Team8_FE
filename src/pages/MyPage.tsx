import React, { ChangeEvent, useEffect, useState } from 'react';
import useModal from '@hooks/useModal';
import { Button, Input } from '@material-tailwind/react';
import GroupList from '@components/Home/GroupList';
import PasswordChangeModal from '@components/Modal/PasswordChangeModal';
import AuthDeleteModal from '@components/Modal/AuthDeleteModal';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AUTH_KEYS } from '@constants/queryKeys';
import { getMyInfoFn, nickNameChangeFn } from '@apis/authApi';
import { MyInfo } from '@apis/dto';
import { NAME_PATTERN } from '@constants/validationPatterns';
import { NAME_ERROR_MSG } from '@constants/errorMsg';
import { getErrorMsg } from '@utils/serverError';

const MyPage = () => {
  const [nickName, setNickName] = useState('');
  const [isNickNameChanging, setIsNickNameChanging] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState('');
  const passwordChangeModal = useModal();
  const authDeleteModal = useModal();

  const { data: myInfo } = useQuery<MyInfo>({ queryKey: AUTH_KEYS.myInfo, queryFn: getMyInfoFn });
  const { mutate: nickNameChange } = useMutation({ mutationFn: nickNameChangeFn });

  const handleNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const handleIsNickNameChanging = () => {
    setIsNickNameChanging((prev) => !prev);
  };

  const handleCancelClick = () => {
    if (myInfo) {
      setNickName(myInfo.mainNickName);
    }
    setErrorMsg('');
    handleIsNickNameChanging();
  };

  const handleNickNameChange = () => {
    if (!NAME_PATTERN.test(nickName)) {
      setErrorMsg(NAME_ERROR_MSG);
      return;
    }

    nickNameChange(
      { newNickName: nickName },
      {
        onSuccess: () => {
          setErrorMsg('');
          handleIsNickNameChanging();
        },
        onError: (error) => {
          setErrorMsg(getErrorMsg(error) ?? '');
        },
      },
    );
  };

  useEffect(() => {
    if (myInfo) {
      setNickName(myInfo.mainNickName);
    }
  }, [myInfo]);

  return (
    <div className='mb-10'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        마이페이지
      </h1>
      <div className='mt-20 p-4'>
        <div className='flex items-baseline'>
          <span className='font-extrabold w-40'>대표 닉네임</span>
          <div className='flex items-center grow'>
            <div className='relative'>
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
                disabled={!isNickNameChanging}
                onChange={handleNickName}
              />
              {errorMsg && <p className='absolute -bottom-5 text-xs mx-1 flex items-center text-error'>{errorMsg}</p>}
            </div>
            {isNickNameChanging ? (
              <>
                <Button
                  ripple={false}
                  variant='outlined'
                  color='gray'
                  className='ml-4 rounded-sm py-[11px] whitespace-nowrap hover:opacity-100'
                  onClick={handleCancelClick}
                >
                  취소
                </Button>
                <Button
                  ripple={false}
                  variant='outlined'
                  color='gray'
                  className='ml-2 rounded-sm py-[11px] whitespace-nowrap hover:opacity-100'
                  onClick={handleNickNameChange}
                >
                  변경하기
                </Button>
              </>
            ) : (
              <Button
                ripple={false}
                variant='outlined'
                color='gray'
                className='ml-4 rounded-sm py-[11px] whitespace-nowrap'
                onClick={handleIsNickNameChanging}
              >
                변경하기
              </Button>
            )}
          </div>
        </div>
        <div className='flex items-baseline mt-10'>
          <span className='font-extrabold w-40'>비밀번호 변경</span>
          <Button
            ripple={false}
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
        {myInfo && myInfo.groupList && myInfo.groupList.length > 0 ? (
          <GroupList groups={myInfo.groupList} />
        ) : (
          <p className='text-center my-10'>참여한 그룹이 없습니다.</p>
        )}
      </div>
      <div className='text-right p-4'>
        <Button
          variant='text'
          ripple={false}
          className='p-1 rounded-sm whitespace-nowrap text-red-600 hover:bg-transparent active:bg-transparent hover:underline decoration-black'
          onClick={authDeleteModal.handleModal}
        >
          회원 탈퇴하기
        </Button>
        <AuthDeleteModal isOpen={authDeleteModal.isOpen} onClick={authDeleteModal.handleModal} />
      </div>
    </div>
  );
};

export default MyPage;
