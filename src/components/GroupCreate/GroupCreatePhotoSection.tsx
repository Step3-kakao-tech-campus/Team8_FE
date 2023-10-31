import React, { useRef, useState } from 'react';
import { MdOutlineImage } from 'react-icons/md';
import { Button, Typography } from '@material-tailwind/react';
import { useSetRecoilState } from 'recoil';
import groupCreateInfoState from '@recoil/atoms/group';

interface onNextStepProps {
  onNextStep: () => void;
}

const GroupCreatePhotoSection = ({ onNextStep }: onNextStepProps) => {
  const setGroupInfo = useSetRecoilState(groupCreateInfoState);
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgPreview, setImgPreview] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const imageFile = e.target.files[0];
    const fileReader = new FileReader();
    setGroupInfo((prev) => ({ ...prev, groupImage: imageFile }));

    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (event) => {
      const result = event?.target?.result as string;
      setImgPreview(result);
    };
  };
  const handleFileRemove = () => {
    setImgPreview('');
  };
  const handleUploadClick = () => {
    inputRef.current?.click();
  };
  const handleNextStep = () => {
    // TODO: 사진 조건 체크(있는지 없는지)
    onNextStep();
  };
  return (
    <section className='space-y-10'>
      <div>
        <Typography variant='lead'>
          그룹의 <strong>대표 사진</strong>을 등록해주세요.
        </Typography>
        <Typography variant='paragraph'>이후 그룹 설정에서 변경할 수 있습니다.</Typography>
      </div>
      <div className='text-right'>
        {imgPreview && (
          <>
            <label
              htmlFor='inputFile'
              className='p-2 text-sm font-semibold text-gray-600 hover:text-gray-800 cursor-pointer'
            >
              이미지 변경하기
            </label>
            <Button
              variant='text'
              ripple={false}
              className='p-2 text-sm font-semibold text-gray-600 hover:bg-transparent hover:text-gray-800 active:bg-transparent'
              onClick={handleFileRemove}
            >
              이미지 삭제
            </Button>
          </>
        )}

        <input
          ref={inputRef}
          id='inputFile'
          type='file'
          className='hidden'
          accept='image/*'
          onChange={handleFileChange}
        />
      </div>
      {imgPreview ? (
        <img
          src={imgPreview}
          alt='upload-img'
          className={`w-full object-cover object-center ${imgPreview ? '!mt-2' : ''}`}
        />
      ) : (
        <Button
          variant='outlined'
          className='w-full border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-0 focus:bg-gray-50'
          onClick={handleUploadClick}
        >
          <MdOutlineImage size={40} className='mx-auto text-gray-400' />
          <p className='mt-2 text-sm font-semibold text-gray-600'>이미지 선택하기</p>
        </Button>
      )}
      <div className='flex justify-between items-center'>
        <Button
          variant='text'
          ripple={false}
          className='p-2 text-sm font-normal text-gray-500 hover:text-gray-600 hover:bg-transparent active:bg-transparent underline underline-offset-2'
          onClick={handleNextStep}
        >
          다음에 하기
        </Button>
        <Button onClick={handleNextStep}>확인</Button>
      </div>
    </section>
  );
};

export default GroupCreatePhotoSection;
