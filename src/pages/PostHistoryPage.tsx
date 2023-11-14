import React from 'react';
import PostHistoryAccordion from '@components/Page/Post/PostHistoryAccordion';
import { useQuery } from '@tanstack/react-query';
import { getHistoryFn } from '@apis/postApi';
import { POST_KEYS } from '@constants/queryKeys';
import { useParams } from 'react-router-dom';

const PostHistoryPage = () => {
  const { groupId, postId } = useParams();
  if (!groupId || !postId) return null;

  const numGroupId = Number(groupId);
  const numPostId = Number(postId);

  const { data, isLoading } = useQuery({
    queryKey: POST_KEYS.history({ groupId: numGroupId, postId: numPostId }),
    queryFn: async () => getHistoryFn({ groupId: numGroupId, postId: numPostId }),
  });

  const historyList = data?.data.response.historyList || [];
  const currentTitle = data?.data.response.currentTitle || '';

  return (
    <section className='max-w-3xl sm:w-[90vw] mx-auto'>
      {!isLoading && (
        <div>
          <h1 className='inline pb-4 pr-40 mb-20 text-xl font-extrabold border border-x-0 border-b-1 border-t-0 border-black'>
            &quot;{currentTitle}&quot; 글의 히스토리
          </h1>
          <div className='mt-16 mb-10'>
            <PostHistoryAccordion historyList={historyList} />
          </div>
        </div>
      )}
    </section>
  );
};

export default PostHistoryPage;
