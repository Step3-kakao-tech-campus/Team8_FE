import React, { useState } from 'react';
import { MdReport } from 'react-icons/md';
import { Select, Typography, Option, Textarea, Button } from '@material-tailwind/react';
import { reportPostFn } from '@apis/postApi';
import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

const ReportPage = () => {
  const [content, setContent] = useState<string>('');
  const [type, setType] = useState<string>('스팸홍보/도배글');
  const [isReported, setIsReported] = useState<boolean>(false);

  const { groupId, page, postId } = useParams();
  const numGroupId = Number(groupId);
  const numPostId = Number(postId);

  const navigate = useNavigate();

  const { mutate: reportPost } = useMutation({
    mutationFn: () => reportPostFn({ groupId: numGroupId, postId: numPostId, content: `${type}: ${content}` }),
    onSuccess: () => {
      setIsReported(true);
    },
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value);
  };

  const handleReportClick = () => {
    if (!content) return;
    reportPost();
  };

  return (
    <section>
      {isReported ? (
        <div className='text-center p-20'>
          <Typography variant='h4'>신고가 완료되었습니다.</Typography>
          <Typography variant='h6' color='gray' className='text-xs mt-2 mb-10'>
            검토 후 사유가 미흡하다고 판단되면 신고가 취소될 수 있습니다.
          </Typography>
          <Button ripple={false} type='submit' className='rounded' onClick={() => navigate(`/${groupId}/${page}`)}>
            돌아가기
          </Button>
        </div>
      ) : (
        <div className='px-10'>
          <div className='mb-6'>
            <div className='flex items-center mb-1'>
              <Typography variant='h4'>내용 신고하기</Typography>
              <MdReport size={30} color='red' />
            </div>
            <Typography variant='paragraph' color='gray' className='text-xs'>
              신고는 운영진에게 전달되며, 신고된 내용은 운영진이 검토 후에 삭제될 수 있습니다.
            </Typography>
          </div>
          <form className='py-4 flex flex-col gap-6'>
            <div className='flex gap-4 items-center'>
              <Typography variant='h6' className='w-1/6'>
                신고 사유
              </Typography>
              <div className='w-40'>
                <Select label='유형 선택' onChange={() => handleTypeChange} value={type}>
                  <Option value='스팸홍보/도배글'>스팸홍보/도배글</Option>
                  <Option value='불법정보 포함'>불법정보 포함</Option>
                  <Option value='음란물'>음란물</Option>
                  <Option value='욕설/혐오 표현'>욕설/혐오 표현</Option>
                  <Option value='개인정보 노출'>개인정보 노출</Option>
                  <Option value='유해물 포함'>유해물 포함</Option>
                  <Option value='명예훼손/저작권 침해'>명예훼손/저작권 침해</Option>
                </Select>
              </div>
            </div>
            <div>
              <Typography variant='h6' className='w-1/6 mb-4'>
                신고 내용
              </Typography>
              <div className='max-w-3xl'>
                <Textarea
                  label='구체적인 상세 내용을 반드시 입력해주세요.'
                  rows={8}
                  required
                  wrap='soft'
                  onChange={handleContentChange}
                  color={content ? 'gray' : 'red'}
                  value={content}
                />
              </div>
            </div>
            <div className='flex justify-end'>
              <Button type='submit' ripple={false} className='rounded' onClick={handleReportClick}>
                신고하기
              </Button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default ReportPage;
