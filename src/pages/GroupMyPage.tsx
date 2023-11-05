import React, { useState, useEffect } from 'react';
import { Button, Input } from '@material-tailwind/react';
import { useNavigate, useParams } from 'react-router-dom';
import ContributeList from '@components/MyPage/ContributeList';
import GroupQuitModal from '@components/Modal/GroupQuitModal';
import useModal from '@hooks/useModal';
import { useMutation, useQuery } from '@tanstack/react-query';
import { GROUP_KEYS } from '@constants/queryKeys';
import { getGroupMyInfo, setGroupMyInfo } from '@apis/groupApi';
import { queryClient } from '@apis/queryClient';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { REQUIRE_ERROR_MSG, GROUP_NICKNAME_ERROR_MSG } from '@constants/errorMsg';
import { GROUP_NICKNAME_PATTERN } from '@constants/validationPatterns';
import { AxiosError } from 'axios';

interface NickNameInput {
  nickName: string;
}

const GroupMyPage = () => {
  const navigate = useNavigate();
  const { groupId } = useParams() as { groupId: string };
  const numGroupId = Number(groupId);
  const [nowNickName, setNowNickName] = useState<string>('');
  const [isNickNameChanging, setIsNickNameChanging] = useState<boolean>(false);
  const quitModal = useModal();
  const { data: groupMyInfo, isLoading } = useQuery({
    queryKey: GROUP_KEYS.groupMyInfo({ groupId: numGroupId }),
    queryFn: () => getGroupMyInfo(numGroupId),
  });
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<NickNameInput>({
    defaultValues: {
      nickName: '',
    },
  });

  const { mutate: setGroupMyInfoMutate } = useMutation({
    mutationFn: (nickName: string) => setGroupMyInfo({ groupId: numGroupId, newGroupNickName: nickName }),
    onSuccess: () => {
      queryClient.invalidateQueries(GROUP_KEYS.groupMyInfo({ groupId: numGroupId }));
      setIsNickNameChanging(false);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const errorData = error.response?.data.error;
        const { message, status } = errorData;
        if (status === 400 && message === '해당 닉네임은 이미 사용중입니다.') {
          setError(
            'nickName',
            {
              type: 'manual',
              message,
            },
            {
              shouldFocus: true,
            },
          );
        }
      }
    },
  });
  const handleChangeClick = () => {
    if (isNickNameChanging) {
      setValue('nickName', nowNickName);
      clearErrors();
    }
    setIsNickNameChanging((prev) => !prev);
  };
  const handleNickNameChange: SubmitHandler<FieldValues> = ({ nickName }) => {
    if (!isValid) return;

    setGroupMyInfoMutate(nickName);
  };

  useEffect(() => {
    if (groupMyInfo) {
      setValue('nickName', groupMyInfo.groupNickName);
      setNowNickName(groupMyInfo.groupNickName);
    }
  }, [groupMyInfo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className='mb-10'>
      <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
        마이페이지
      </h1>
      <section className='mt-20 p-4'>
        <div className='flex'>
          <span className='text-2xl text-blue-900 font-extrabold'>{groupId}</span>
        </div>
        <div className='flex items-center mt-10'>
          <span className='font-extrabold w-40'>그룹 닉네임</span>
          <form className='flex items-center grow' onSubmit={handleSubmit(handleNickNameChange)}>
            <div className='relative'>
              <Input
                type='text'
                label='닉네임'
                className='!border !border-t-blue-gray-20 !border-gray-400 text-gray-900 rounded-sm placeholder:text-gray-500 focus:!border-gray-900'
                containerProps={{ className: 'min-w-[100px] max-w-[240px]' }}
                labelProps={{
                  className: 'hidden',
                }}
                crossOrigin=''
                disabled={!isNickNameChanging}
                {...register('nickName', {
                  required: REQUIRE_ERROR_MSG,
                  minLength: 2,
                  maxLength: 8,
                  pattern: GROUP_NICKNAME_PATTERN,
                })}
              />
              {errors.nickName && (
                <p className='absolute text-xs mt-1 mx-1 flex items-center text-error'>
                  {errors.nickName.message ? REQUIRE_ERROR_MSG : GROUP_NICKNAME_ERROR_MSG}
                </p>
              )}
            </div>
            {isNickNameChanging ? (
              <>
                <Button
                  variant='outlined'
                  color='gray'
                  className='ml-4 rounded-sm py-[11px] whitespace-nowrap hover:opacity-100'
                  onClick={handleChangeClick}
                >
                  취소
                </Button>
                <Button
                  type='submit'
                  variant='outlined'
                  color='gray'
                  className='ml-2 rounded-sm py-[11px] whitespace-nowrap hover:opacity-100'
                >
                  확인
                </Button>
              </>
            ) : (
              <Button
                variant='outlined'
                color='gray'
                className='ml-4 rounded-sm py-[11px] whitespace-nowrap hover:opacity-100'
                onClick={handleChangeClick}
              >
                변경하기
              </Button>
            )}
          </form>
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
        <ContributeList contributeItems={groupMyInfo.myHistorgiyDTOS} />
      </section>
      <div className='text-right p-4'>
        <Button
          variant='text'
          ripple={false}
          className='p-1 rounded-sm whitespace-nowrap text-red-600 hover:bg-transparent active:bg-transparent hover:underline decoration-black'
          onClick={quitModal.handleModal}
        >
          그룹 탈퇴하기
        </Button>
        <GroupQuitModal groupId={groupId} isOpen={quitModal.isOpen} onClick={quitModal.handleModal} />
      </div>
    </main>
  );
};

export default GroupMyPage;
