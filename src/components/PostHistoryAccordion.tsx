import React, { useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

const PostHistoryAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(new Array(20).fill(false));

  const handleOpenAccordion = (index: number) => {
    const newAccordionState = [...openAccordion];
    newAccordionState[index] = !newAccordionState[index];
    setOpenAccordion(newAccordionState);
  };

  return (
    <>
      {openAccordion.map((isOpen, index) => (
        <Accordion key={index} open={isOpen}>
          <AccordionHeader onClick={() => handleOpenAccordion(index)}>{`Accordion ${index + 1}`}</AccordionHeader>
          <AccordionBody>내용내용</AccordionBody>
        </Accordion>
      ))}
    </>
  );
};

export default PostHistoryAccordion;
