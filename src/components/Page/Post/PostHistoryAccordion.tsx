import React, { useEffect, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Chip } from '@material-tailwind/react';
import { getFormattedDateTime } from '@utils/time';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import Viewer from './Editor/Ckviewer';

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
              {`${getFormattedDateTime(history.createdAt)} by ${history.nickName}`}
              {index === 0 && (
                <Chip variant='ghost' size='sm' color='deep-orange' value='현재' className=' rounded-full' />
              )}
            </div>
          </AccordionHeader>
          <AccordionBody className='whitespace-prewrap text-xs font-normal text-gray-600'>
            <Viewer content={history.content} />
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default PostHistoryAccordion;
