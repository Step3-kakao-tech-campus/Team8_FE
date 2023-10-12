import React from 'react';
import { MdReport } from 'react-icons/md';
import { Select, Typography, Option, Textarea, Button } from '@material-tailwind/react';

const ReportPage = () => {
  return (
    <section>
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
            <Select label='유형 선택'>
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
            <Textarea label='구체적인 상세 내용을 반드시 입력해주세요.' rows={8} required wrap='soft' />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button type='submit' className='rounded-sm'>
            신고하기
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ReportPage;
