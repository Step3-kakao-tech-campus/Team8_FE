import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className='mx-auto flex w-full max-w-full flex-col xl:flex-row items-start justify-center gap-4 xl:gap-6 2xl:gap-10 px-8 py-10'>
      <aside className='sticky w-full top-8 xl:w-52 2xl:w-64 shrink-0'>{/* 목차 */}</aside>
      <main className='w-full xl:max-w-4xl'>{children}</main>
      <aside className='sticky top-8 w-full xl:w-52 2xl:w-64 shrink-0'>{/* 최근 변경 */}</aside>
    </div>
  );
};

export default PageContainer;
