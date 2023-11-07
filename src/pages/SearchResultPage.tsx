import React, { useEffect, useState } from 'react';
import RecentChangeList from '@components/Page/Common/RecentChangeList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdArrowCircleRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-tailwind/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createPageFn, getPageByTitleFn, searchPageFn } from '@apis/pageApi';
import { PAGE_KEYS } from '@constants/queryKeys';
import PageCreateModal from '@components/Modal/PageCreateModal';
import useModal from '@hooks/useModal';

interface Page {
  pageId: number;
  pageName: string;
  content: string;
}

interface Error {
  response: {
    data: {
      error: {
        message: string;
      };
    };
  };
}

const SearchResultPage = () => {
  const navigate = useNavigate();

  const { groupId } = useParams();
  const numGroupId = Number(groupId);

  const query = useLocation().search;
  const queries = new URLSearchParams(query);
  const keyword = queries.get('keyword') || '';

  const pageCreateModal = useModal();

  const [hasMatchingPage, setHasMatchingPage] = useState<boolean>(true);

  const { status, error } = useQuery({
    queryKey: PAGE_KEYS.byTitle({ groupId: numGroupId, title: keyword }),
    queryFn: () => getPageByTitleFn({ groupId: numGroupId, title: keyword }),
  });

  useEffect(() => {
    // 일치하는 페이지가 없는 경우에 검색 결과 받아오기
    if (status === 'error') {
      if ((error as Error).response?.data?.error?.message === '존재하지 않는 페이지 입니다.') {
        setHasMatchingPage(false);
      }
    }

    // 일치하는 페이지가 있는 경우 해당 페이지로 이동
    if (status === 'success') {
      setHasMatchingPage(true);
      navigate(`/${groupId}/${keyword}`);
    }
  }, [status, error, keyword, groupId, navigate]);

  const { data: pageData } = useQuery({
    queryKey: PAGE_KEYS.searchKeyword({ groupId: numGroupId, keyword }),
    queryFn: () => searchPageFn({ groupId: numGroupId, keyword }),
    enabled: !hasMatchingPage,
  });

  const pages = pageData?.data?.response.pages || [];

  const { mutate: createPage } = useMutation({
    mutationFn: createPageFn,
    onSuccess: () => {
      navigate(`/${groupId}/${keyword}`);
    },
  });

  const handlePageCreate = () => {
    createPage({ groupId: numGroupId, pageName: keyword });
  };

  return (
    <div className='w-screen'>
      <main className='flex px-14 min-w-max gap-20'>
        <section className='result w-9/12'>
          <span className='text-3xl font-bold'>{`"${keyword}"`}</span>
          <div className='flex items-center justify-between bg-gray-200 rounded-lg p-4 my-8'>
            <span className='text-sm mr-8'>찾는 페이지가 없다면?</span>
            <Button
              variant='text'
              ripple={false}
              className='group flex items-center gap-1 py-1 px-2 text-sm font-bold hover:bg-transparent active:bg-transparent'
              onClick={pageCreateModal.handleModal}
            >
              <span>새 페이지 생성하기</span>
              <MdArrowCircleRight className='w-5 h-5 group-hover:animate-arrowBounce' />
            </Button>
          </div>
          <PageCreateModal
            page={keyword}
            isOpen={pageCreateModal.isOpen}
            onClick={handlePageCreate}
            handleModal={pageCreateModal.handleModal}
          />
          {pages.length === 0 ? (
            <div className='flex flex-col items-center justify-center h-96'>
              <span className='text-xl font-bold mb-4'>검색 결과가 없습니다.</span>
              <span>다른 검색어로 검색하거나 직접 페이지를 만들어보세요.</span>
            </div>
          ) : (
            pages.map((page: Page) => (
              <div key={uuidv4()} className='px-2 py-8 border-b border-gray-200'>
                <h2 className='text-lg font-bold mb-1'>{page.pageName}</h2>
                <p className='text-sm text-gray-500'>{page.content}</p>
              </div>
            ))
          )}
        </section>
        <aside>
          <RecentChangeList />
        </aside>
      </main>
    </div>
  );
};

export default SearchResultPage;
