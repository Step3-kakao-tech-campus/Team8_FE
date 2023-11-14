import React, { useEffect } from 'react';
import RecentChangeList from '@components/Page/Common/RecentChangeList';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MdArrowCircleRight } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@material-tailwind/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createPageFn, searchPageFn } from '@apis/pageApi';
import { PAGE_KEYS } from '@constants/queryKeys';
import PageCreateModal from '@components/Modal/PageCreateModal';
import useModal from '@hooks/useModal';
import { queryClient } from '@apis/queryClient';

interface Page {
  pageId: number;
  pageName: string;
  content: string;
}

const SearchResultPage = () => {
  const navigate = useNavigate();

  const { groupId } = useParams();
  const numGroupId = Number(groupId);

  const query = useLocation().search;
  const queries = new URLSearchParams(query);
  const keyword = queries.get('keyword') || '';

  const pageCreateModal = useModal();

  // 검색 결과
  const { data: pageData } = useQuery({
    queryKey: PAGE_KEYS.searchKeyword({ groupId: numGroupId, keyword }),
    queryFn: () => searchPageFn({ groupId: numGroupId, keyword: encodeURIComponent(keyword) }),
    enabled: !!keyword,
  });

  const pages = pageData?.data?.response.pages || [];

  // 이미 존재하는 페이지인 경우 바로 이동
  useEffect(() => {
    if (!keyword) return;
    const isHasPage = pages[0]?.pageName === keyword;
    if (isHasPage) navigate(`/${groupId}/${encodeURIComponent(keyword)}`);
  }, [keyword, pages, navigate, groupId]);

  const { mutate: createPage } = useMutation({
    mutationFn: createPageFn,
    onSuccess: () => {
      queryClient.invalidateQueries(PAGE_KEYS.byTitle({ groupId: numGroupId, title: keyword }));
      navigate(`/${groupId}/${encodeURIComponent(keyword)}`, { replace: true });
    },
  });

  const handlePageCreate = () => {
    if (!keyword) return;
    // if(isHasPage) return navigate(`/${groupId}/${keyword}`);
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
              <button
                type='button'
                key={uuidv4()}
                className='px-2 py-8 border-b border-gray-200 hover:underline w-full text-left'
                onClick={() => navigate(`/${groupId}/${encodeURIComponent(page.pageName)}`)}
              >
                <h2 className='text-lg font-bold mb-1'>{page.pageName}</h2>
                <div
                  className='ck-content ck-read-only text-sm text-gray-500'
                  dangerouslySetInnerHTML={{ __html: page.content }}
                />
              </button>
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
