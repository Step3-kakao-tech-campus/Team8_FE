import React, { useState } from 'react';
import { Button, Input, Spinner } from '@material-tailwind/react';
import DividerWithText from '@components/Common/DividerWithText';
import { useMutation } from '@tanstack/react-query';
import { pnuMailAuthFn, pnuMailCertificationNumberCheckFn } from '@apis/authApi';
import { PNU_MAIL_PATTERN } from '@constants/validationPatterns';
import { PNU_EMAIL_ERROR_MSG } from '@constants/errorMsg';
import { useNavigate } from 'react-router-dom';
import { GroupDetail } from '@apis/dto';
import { getErrorMsg } from '@utils/serverError';

const OfficialGroup = ({ data }: { data: GroupDetail }) => {
  const { groupId, groupName } = data;

  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [certificationNumberErrorMsg, setCertificationNumberErrorMsg] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const [certificationNumber, setCertificationNumber] = useState('');

  const { mutate: pnuMailAuth, isLoading: emailLoding } = useMutation({ mutationFn: pnuMailAuthFn });
  const { mutate: pnuMailCertificationNumberCheck } = useMutation({ mutationFn: pnuMailCertificationNumberCheckFn });
  const navigate = useNavigate();

  const handleOnEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailSent(false);
    setEmail(event.target.value);
  };
  const handleOnCertificationNumberChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCertificationNumber(event.target.value);

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

  const handleEmailCheck = () => {
    setCertificationNumberErrorMsg('');

    pnuMailCertificationNumberCheck(
      { email, certificationNumber },
      {
        onSuccess: () => {
          navigate(`/${groupId}/${groupName}`, { replace: true });
        },
        onError: (error) => {
          const errorMsg = getErrorMsg(error);
          if (errorMsg) {
            setCertificationNumberErrorMsg(errorMsg);
          }
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
              ripple={false}
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
        {isEmailSent && (
          <div>
            <div className='relative flex w-full mt-6'>
              <Input
                type='text'
                label='인증번호 입력'
                value={certificationNumber}
                onChange={handleOnCertificationNumberChange}
                className='pr-20'
                containerProps={{
                  className: 'min-w-0',
                }}
                crossOrigin=''
              />
              <Button
                size='sm'
                ripple={false}
                color={certificationNumber ? 'gray' : 'blue-gray'}
                disabled={!certificationNumber}
                onClick={handleEmailCheck}
                className='!absolute right-1 top-1 rounded'
              >
                확인
              </Button>
            </div>
            {certificationNumberErrorMsg && (
              <p className='text-xs mt-1 mx-1 flex items-center text-error'>{certificationNumberErrorMsg}</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default OfficialGroup;
