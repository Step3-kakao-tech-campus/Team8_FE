interface Page {
  pageId: number;
  pageName: string;
  content: string;
}

export const recentChangePageDummyData: Omit<Page, 'content'>[] = [
  { pageId: 1, pageName: '최근 변경 페이지 테스트' },
  { pageId: 2, pageName: '페이지 이름2' },
  { pageId: 3, pageName: '페이지 이름3' },
];

interface Post {
  postId: number;
  postTitle: string;
  content: string;
  index: string;
}

export const pageDummyData: Page[] = [
  {
    pageId: 1,
    pageName: '테스트 게시글',
    content: '테스트 게시글 내용',
  },
  {
    pageId: 2,
    pageName: '테스트 게시글2',
    content: '테스트 게시글 내용2',
  },
  {
    pageId: 3,
    pageName: '테스트 게시글3',
    content: '테스트 게시글 내용3',
  },
];

interface PageInfo {
  pageName: string;
  postList: Post[];
  goodCount: number;
  badCount: number;
}

export const pageInfo: PageInfo = {
  pageName: '부산대학교',
  postList: [
    {
      postId: 1,
      index: '1',
      postTitle: '개요',
      content: '내용...',
    },
    {
      postId: 2,
      index: '2',
      postTitle: '역사',
      content: '내용...',
    },
    {
      postId: 4,
      index: '2-1',
      postTitle: '컴공의 역사',
      content: '내용...',
    },
  ],
  goodCount: 7326,
  badCount: 545,
};
