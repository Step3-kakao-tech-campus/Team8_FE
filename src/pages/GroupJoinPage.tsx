import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button, Input, Typography } from '@material-tailwind/react';
import DividerWithText from '@components/Common/DividerWithText';
import { GROUP_KEYS } from '@constants/queryKeys';
import UnOfficialOpenedGroup from '@components/JoinGroup/UnOfficialOpenedGroup';
// import { getGroupInfoFn } from '@apis/groupApi';
import { fakeGetGroupInfoFn } from '@apis/groupApi';
import Logo from '@assets/images/logo/logo.svg';

const GroupJoinPage = () => {
  const { groupId } = useParams() as { groupId: string };
  const [isImgError, setImageError] = useState(false);
  const [email, setEmail] = useState<string>(''); // 이메일 인증용
  const [validatingCode, setValidatingCode] = useState(''); // 이메일 인증 코드
  const { data, isLoading } = useQuery({
    queryKey: GROUP_KEYS.groupInfo({ groupId }),
    queryFn: fakeGetGroupInfoFn,
    // queryFn: () => getGroupInfoFn(groupId),
  });

  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleOnValidatingCodeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValidatingCode(event.target.value);

  // 이메일 인증
  const handleEmailSend = () => {
    // TODO: 이메일 인증 API 보내기
    setIsEmailSent(true);
  };

  const handleEmailCheck = () => {
    // TODO: 이메일 인증 확인 API 보내기
  };
  const handleImgError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = Logo;
    setImageError(true);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const { groupName, groupImage, introduction, groupType, created_at: createdAt, memberCount } = data;
  return (
    <section className='max-w-fit mx-auto'>
      <div className='w-full'>
        <Typography variant='h4' className='font-normal'>
          <span className='font-bold'>{groupName}</span>에 가입해보세요.
        </Typography>
        <p className='mb-6 text-gray-600 text-sm'>
          {createdAt.split('T')[0]}일에 개설된 그룹이에요. 현재 {memberCount}명이 참여하고 있어요.
        </p>
      </div>
      <div className='flex flex-col gap-6 border p-10 items-center min-w-[450px]'>
        <img
          src={groupImage}
          alt='그룹 대표 이미지'
          onError={handleImgError}
          className={`object-cover w-28 h-28 rounded ${isImgError ? 'opacity-10 p-4' : ''}`}
        />
        <div className='w-full text-center'>
          <Typography variant='h6'>{groupName}</Typography>
          <p className='text-xs min-w-[400px]'>{introduction}</p>
        </div>
        {groupType === 'UNOFFICIAL_OPENED' && <UnOfficialOpenedGroup data={data} />}
        {groupType === 'UNOFFICIAL_CLOSED' && <Button>가입하기</Button>}
        {groupType === 'OFFICIAL' && (
          <div className='w-full'>
            <form className='w-full text-center'>
              <DividerWithText>학교 인증을 진행해주세요.</DividerWithText>
              <div className='relative flex w-full mt-6'>
                <Input
                  type='text'
                  label='학교 이메일 입력'
                  value={email}
                  onChange={handleOnEmailChange}
                  className='pr-20'
                  containerProps={{
                    className: 'min-w-0',
                  }}
                  crossOrigin=''
                />
                <Button
                  size='sm'
                  color={email ? 'gray' : 'blue-gray'}
                  disabled={!email}
                  className='!absolute right-1 top-1 rounded'
                  onClick={handleEmailSend}
                >
                  {isEmailSent ? '재전송' : '인증'}
                </Button>
              </div>

              {/* TODO: 중복 이메일, 이메일 형식 오류 등 안내 메세지 출력(에러처리) */}
              <p className='text-xs mt-2'>{isEmailSent && '인증번호를 전송했습니다.'}</p>

              {isEmailSent && (
                <div className='relative flex w-full mt-6'>
                  <Input
                    type='text'
                    label='인증번호 입력'
                    value={validatingCode}
                    onChange={handleOnValidatingCodeChange}
                    className='pr-20'
                    containerProps={{
                      className: 'min-w-0',
                    }}
                    crossOrigin=''
                  />
                  <Button
                    size='sm'
                    color={validatingCode ? 'gray' : 'blue-gray'}
                    disabled={!validatingCode}
                    className='!absolute right-1 top-1 rounded'
                    onClick={handleEmailCheck}
                  >
                    확인
                  </Button>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default GroupJoinPage;
