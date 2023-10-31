import React from 'react';

import { groupInfoDummyData, groupJoinPassword, groupType } from '@dummy/group';
import { Button, Input, Typography } from '@material-tailwind/react';
import DividerWithText from '@components/Common/DividerWithText';
import { useNavigate } from 'react-router-dom';

const GroupJoinPage = () => {
  const data = groupInfoDummyData;
  const [entranceCode, setEntranceCode] = React.useState('');
  const [isWrong, setIsWrong] = React.useState(false);

  const [email, setEmail] = React.useState(''); // 이메일 인증용
  const [validatingCode, setValidatingCode] = React.useState('');
  const [isEmailSent, setIsEmailSent] = React.useState(false);

  const navigate = useNavigate();

  const handleOnCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => setEntranceCode(event.target.value);
  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handleOnValidatingCodeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValidatingCode(event.target.value);

  // 정답 맞는지 확인
  const handleCodeCheck = () => {
    if (entranceCode === groupJoinPassword) {
      // TODO: 가입 완료 API 보내기
      navigate(`/${data.groupName}`);
    } else {
      setIsWrong(true);
    }
  };

  // 이메일 인증
  const handleEmailSend = () => {
    // TODO: 이메일 인증 API 보내기
    setIsEmailSent(true);
  };

  const handleEmailCheck = () => {
    // TODO: 이메일 인증 확인 API 보내기
  };

  return (
    <section className='max-w-fit mx-auto'>
      <div className='w-full'>
        <Typography variant='h4' className='font-normal'>
          <span className='font-bold'>{data.groupName}</span>에 가입해보세요.
        </Typography>
        <p className='mb-6 text-gray-600 text-sm'>
          {data.created_at.split('T')[0]}일에 개설된 그룹이에요. 현재 {data.memberCount}명이 참여하고 있어요.
        </p>
      </div>
      <div className='flex flex-col gap-6 border p-10 items-center min-w-[450px]'>
        <img src={data.groupImage} alt='그룹 대표 이미지' className='object-cover w-28 h-28 rounded' />
        <div className='w-full text-center'>
          <Typography variant='h6'>{data.groupName}</Typography>
          <p className='text-xs min-w-[400px]'>{data.introduction}</p>
        </div>
        {groupType === 'unofficialNoOpen' && (
          <div className='w-full'>
            <form className='w-full text-center'>
              <DividerWithText>정답을 맞추면 가입할 수 있어요.</DividerWithText>
              <Typography variant='h6' className='text-sm mb-3 mt-6'>
                Q. {data.entranceHint}
              </Typography>
              <div className='relative flex w-full'>
                <Input
                  type='text'
                  label='정답 입력'
                  value={entranceCode}
                  onChange={handleOnCodeChange}
                  className='pr-20'
                  containerProps={{
                    className: 'min-w-0',
                  }}
                  crossOrigin={undefined}
                />
                <Button
                  size='sm'
                  color={entranceCode ? 'gray' : 'blue-gray'}
                  disabled={!entranceCode}
                  className='!absolute right-1 top-1 rounded'
                  onClick={handleCodeCheck}
                >
                  가입하기
                </Button>
              </div>
              {isWrong && <p className='text-error text-xs mt-2'>정답이 틀렸어요. 다시 입력해주세요.</p>}
            </form>
          </div>
        )}
        {groupType === 'unofficialOpen' && <Button>가입하기</Button>}
        {groupType === 'official' && (
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
                  crossOrigin={undefined}
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
                    crossOrigin={undefined}
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
