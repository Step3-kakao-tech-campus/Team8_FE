import React from 'react';

interface PageTitleSectionProps {
  title: string;
  aboveAdornment?: React.ReactNode;
  underAdornment?: React.ReactNode;
}

const PageTitleSection = ({ title, aboveAdornment, underAdornment }: PageTitleSectionProps) => {
  return (
    <section className='w-full flex flex-col justify-center max-w-full px-8'>
      <div>
        <div className='px-2 border-b-2 flex mb-2'>
          <h1 className='text-2xl leading-normal font-bold max-w-fit w-full truncate pb-1'>{title}</h1>
          {aboveAdornment}
        </div>
        {underAdornment}
      </div>
    </section>
  );
};

export default PageTitleSection;
