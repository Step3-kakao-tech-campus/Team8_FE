import React, { useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Button, Chip } from '@material-tailwind/react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface History {
  memberId: number;
  nickName: string;
  historyId: number;
  title: string;
  content: string;
  createdAt: string;
}

interface PostHistoryAccordionProps {
  historyList: History[];
}

const PostHistoryAccordion = ({ historyList }: PostHistoryAccordionProps) => {
  const [openAccordion, setOpenAccordion] = useState(new Array(5).fill(false));

  const handleOpenAccordion = (index: number) => {
    const newAccordionState = [...openAccordion];
    newAccordionState[index] = !newAccordionState[index];
    setOpenAccordion(newAccordionState);
  };

  const handleUndoButtonClick = () => {
    // TODO: 되돌리기 모달 추후 구현
  };

  useEffect(() => {
    setOpenAccordion((prev) => {
      const newAccordionState = [...prev];
      newAccordionState[0] = true;
      return newAccordionState;
    });
  }, []);

  return (
    <>
      {historyList.map((history, index) => (
        // TODO: 키 값 처리
        <Accordion
          key={history.historyId}
          open={openAccordion[index]}
          icon={openAccordion[index] ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
        >
          <AccordionHeader
            onClick={() => handleOpenAccordion(index)}
            className='text-sm font-normal flex justify-between pb-2'
          >
            <div className='flex gap-2 items-center'>
              {`${history.createdAt.replace('T', ' ')} by ${history.nickName}`}
              {index === 0 && (
                <Chip variant='ghost' size='sm' color='deep-orange' value='현재' className=' rounded-full' />
              )}
            </div>
          </AccordionHeader>
          <AccordionBody className='whitespace-prewrap text-xs font-normal text-gray-600'>
            {history.content}
            {index !== 0 && (
              <div className='flex justify-end'>
                <Button
                  ripple={false}
                  variant='text'
                  size='sm'
                  className=' text-red-300 px-2 py-1 text-right'
                  onClick={handleUndoButtonClick}
                >
                  [해당 내용으로 되돌리기]
                </Button>
              </div>
            )}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default PostHistoryAccordion;
