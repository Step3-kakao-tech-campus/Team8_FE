import React, { useState } from 'react';
import { Button, Input, Spinner } from '@material-tailwind/react';
import DividerWithText from '@components/Common/DividerWithText';
import { useMutation } from '@tanstack/react-query';
import { pnuMailAuthFn } from '@apis/authApi';
import { PNU_MAIL_PATTERN } from '@constants/validationPatterns';
import { PNU_EMAIL_ERROR_MSG } from '@constants/errorMsg';

const OfficialGroup = () => {
  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { mutate: pnuMailAuth, isLoading: emailLoding } = useMutation({ mutationFn: pnuMailAuthFn });
  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailSent(false);
    setEmail(event.target.value);
  };

  const handleEmailSend = () => {
    if (!PNU_MAIL_PATTERN.test(email)) {
      setEmailErrorMsg(PNU_EMAIL_ERROR_MSG);
      return;
    }

    setEmailErrorMsg('');
    setIsEmailSent(false);
    pnuMailAuth(
      { email },
      {
        onSuccess: () => {
          setIsEmailSent(true);
        },
      },
    );
  };

  return (
    <div className='w-full'>
      <section className='w-full text-center'>
        <DividerWithText>학교 인증을 진행해주세요.</DividerWithText>
        <div>
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
              {emailLoding ? <Spinner className='h-4 w-4' /> : <p>{isEmailSent ? '재전송' : '인증'}</p>}
            </Button>
          </div>
          {emailErrorMsg && <p className='text-xs mt-1 mx-1 flex items-center text-error'>{emailErrorMsg}</p>}
          {isEmailSent && <p className='text-xs mt-2'>인증번호를 전송했습니다.</p>}
        </div>
        <div className='relative flex w-full mt-6'>
          <Input
            type='text'
            label='인증번호 입력'
            className='pr-20'
            containerProps={{
              className: 'min-w-0',
            }}
            crossOrigin=''
          />
          <Button size='sm' className='!absolute right-1 top-1 rounded'>
            확인
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OfficialGroup;
