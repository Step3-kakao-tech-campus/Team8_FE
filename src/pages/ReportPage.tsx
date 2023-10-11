import React from 'react';
import { MdReport } from 'react-icons/md';
import { Select, Typography, Option, Textarea, Button } from '@material-tailwind/react';

const ReportPage = () => {
  return (
    <section>
      <div className='flex items-center mb-6'>
        <Typography variant='h4'>내용 신고하기</Typography>
        <MdReport size={30} color='red' />
      </div>
      <form className='bg-gray-100 p-8 rounded-sm flex flex-col gap-4'>
        <div className='flex gap-4 items-center'>
          <Typography variant='h6' className='w-1/6'>
            신고 사유
          </Typography>
          <div className='w-40'>
            <Select label='유형 선택'>
              <Option>스팸홍보/도배글</Option>
              <Option>불법정보 포함</Option>
              <Option>음란물</Option>
              <Option>욕설/혐오 표현</Option>
              <Option>개인정보 노출</Option>
              <Option>유해물 포함</Option>
              <Option>명예훼손/저작권 침해</Option>
            </Select>
          </div>
        </div>
        <div>
          <Typography variant='h6' className='w-1/6 mb-4'>
            신고 내용
          </Typography>
          <div className='w-2xl'>
            <Textarea label='상세 내용 입력' rows={8} required />
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
