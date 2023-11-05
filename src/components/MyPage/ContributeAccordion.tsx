import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { v4 as uuidv4 } from 'uuid';
import { ContributeItemProps } from '@apis/dto';
import Viewer from '@components/Page/Post/Editor/Ckviewer';

const ContributeAccordion = ({ contributeItems }: { contributeItems: ContributeItemProps[] }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      {contributeItems.map((data) => (
        <Accordion
          key={uuidv4()}
          open={open === data.historyId}
          className='mb-2 rounded-sm border border-blue-gray-100 px-4'
          icon={<span className='text-sm text-gray-400 font-normal'>{data.createAt}</span>}
        >
          <AccordionHeader
            onClick={() => handleOpen(data.historyId)}
            className={`border-b-0 transition-colors flex justify-between items-baseline text-md ${
              open === data.historyId ? 'text-blue-500 hover:!text-blue-700' : ''
            }`}
          >
            <p className='font-semibold text-black'>
              {data.pageName} /<span className='mx-2 text-red-500'>{data.content.index}.</span>
              {data.content.name}
            </p>
          </AccordionHeader>
          <AccordionBody className='pt-0 max-w-[768px] text-gray-800'>
            <Viewer content={data.content.detail} />
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default ContributeAccordion;
