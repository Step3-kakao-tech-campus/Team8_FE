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
  pageId: number;
  postList: Post[];
  goodCount: number;
  badCount: number;
}

export const getPageInfo = (groupName: string): PageInfo => ({
  pageName: groupName,
  pageId: 1,
  postList: [
    {
      postId: 1,
      index: '1.',
      postTitle: '개요',
      content:
        '여름방학을 맞아 캠프장을 찾아온 선택받은 아이들. 캠프장에서 아이들은 각자 디지바이스(디지몬 어드벤처)를 줍게 되고 갑자기 [[디지털 월드|알 수 없는 이상한 공간]]속으로 빨려 들어가게 된다. 정신을 차린 아이들 앞에는 아이들을 기다리고 있었다던 [[디지몬|괴생물체]]가 있었고 자기들을 파트너 [[디지몬]]이라 소개한다. 정신을 차릴새도 없이 악의를 품은 디지몬들이 습격해 오기 시작하고 아이들은 살아남기 위해, 다시 현실세계로 돌아가기 위해 [[모험]]을 시작한다. 아이들이 위험에 처할 때마다 [[디지바이스(디지몬 어드벤처)|디지바이스]]가 빛나며 파트너 디지몬이 [[성숙기]]로 [[진화(디지몬 시리즈)|진화]]해 위기를 극복하며, 점차 이 곳은 현실세계와는 [[디지털 월드|뭔가 다른 곳의 세상]]의 파일섬이란 것을 알게 된다.',
    },
    {
      postId: 2,
      index: '2.',
      postTitle: '역사',
      content: '내용...',
    },
    {
      postId: 4,
      index: '2.1.',
      postTitle: '컴공의 역사',
      content: '내용...',
    },
  ],
  goodCount: 7326,
  badCount: 545,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getIndexList = (pageId: number): Pick<Post, 'index' | 'postTitle'>[] => [
  {
    index: '1.',
    postTitle: '개요',
  },
  {
    index: '2.',
    postTitle: '역사',
  },
  {
    index: '2.1.',
    postTitle: '컴공의 역사',
  },
  {
    index: '2.1.1.',
    postTitle: '컴공의 역사입니다',
  },
  {
    index: '2.1.1.1.',
    postTitle: '컴공의 역사입니다',
  },
  {
    index: '2.1.1.1.1.',
    postTitle: '컴공의 역사입니다',
  },
  {
    index: '2.1.1.1.1.1.',
    postTitle: '컴공의 역사입니다',
  },
  {
    index: '3.',
    postTitle: '안녕',
  },
  {
    index: '3.1.',
    postTitle: '안녕하세요',
  },
];
