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
        '<h3>여름방학을 맞아 캠프장을 찾아온 선택받은 아이들.</h3><p>&nbsp;</p><p>캠프장에서 아이들은 각자 디지바이스(디지몬 어드벤처)를 줍게 되고 갑자기 [[디지털 월드|알 수 없는 이상한 공간]]속으로 빨려 들어가게 된다. 정신을 차린 아이들 앞에는 아이들을 기다리고 있었다던 [[디지몬|괴생물체]]가 있었고 자기들을 파트너 [[디지몬]]이라 소개한다.</p><figure class="table"><table><tbody><tr><th>wefewfe</th><td>wef</td><td>weg</td><td>asdg</td></tr><tr><th>weg</th><td>fwefg</td><td colspan="2" rowspan="2"><p>weg</p><p>ewf</p><p>wegwe</p><p>efew</p></td></tr><tr><th>fwef</th><td>fwewef</td></tr></tbody></table></figure><p>&nbsp;</p><p>정신을 차릴새도 없이 악의를 품은 디지몬들이 습격해 오기 시작하고 아이들은 살아남기 위해, 다시 현실세계로 돌아가기 위해 [[모험]]을 시작한다. 아이들이 위험에 처할 때마다 [[디지바이스(디지몬 어드벤처)|디지바이스]]가 빛나며 파트너 디지몬이 [[성숙기]]로 [[진화(디지몬 시리즈)|진화]]해 위기를 극복하며, 점차 이 곳은 현실세계와는 [[디지털 월드|뭔가 다른 곳의 세상]]의 파일섬이란 것을 알게 된다.</p>',
    },
    {
      postId: 2,
      index: '2.',
      postTitle: '역사',
      content:
        '<h3>여름방학을 맞아 캠프장을 찾아온 선택받은 아이들.</h3><p>&nbsp;</p><p>캠프장에서 아이들은 각자 디지바이스(디지몬 어드벤처)를 줍게 되고 갑자기 [[디지털 월드|알 수 없는 이상한 공간]]속으로 빨려 들어가게 된다. 정신을 차린 아이들 앞에는 아이들을 기다리고 있었다던 [[디지몬|괴생물체]]가 있었고 자기들을 파트너 [[디지몬]]이라 소개한다.</p><figure class="table"><table><tbody><tr><th>wefewfe</th><td>wef</td><td>weg</td><td>asdg</td></tr><tr><th>weg</th><td>fwefg</td><td colspan="2" rowspan="2"><p>weg</p><p>ewf</p><p>wegwe</p><p>efew</p></td></tr><tr><th>fwef</th><td>fwewef</td></tr></tbody></table></figure><p>&nbsp;</p><p>정신을 차릴새도 없이 악의를 품은 디지몬들이 습격해 오기 시작하고 아이들은 살아남기 위해, 다시 현실세계로 돌아가기 위해 [[모험]]을 시작한다. 아이들이 위험에 처할 때마다 [[디지바이스(디지몬 어드벤처)|디지바이스]]가 빛나며 파트너 디지몬이 [[성숙기]]로 [[진화(디지몬 시리즈)|진화]]해 위기를 극복하며, 점차 이 곳은 현실세계와는 [[디지털 월드|뭔가 다른 곳의 세상]]의 파일섬이란 것을 알게 된다.</p>',
    },
    {
      postId: 4,
      index: '2.1.',
      postTitle: '컴공의 역사',
      content:
        '<h3>여름방학을 맞아 캠프장을 찾아온 선택받은 아이들.</h3><p>&nbsp;</p><p>캠프장에서 아이들은 각자 디지바이스(디지몬 어드벤처)를 줍게 되고 갑자기 [[디지털 월드|알 수 없는 이상한 공간]]속으로 빨려 들어가게 된다. 정신을 차린 아이들 앞에는 아이들을 기다리고 있었다던 [[디지몬|괴생물체]]가 있었고 자기들을 파트너 [[디지몬]]이라 소개한다.</p><figure class="table"><table><tbody><tr><th>wefewfe</th><td>wef</td><td>weg</td><td>asdg</td></tr><tr><th>weg</th><td>fwefg</td><td colspan="2" rowspan="2"><p>weg</p><p>ewf</p><p>wegwe</p><p>efew</p></td></tr><tr><th>fwef</th><td>fwewef</td></tr></tbody></table></figure><p>&nbsp;</p><p>정신을 차릴새도 없이 악의를 품은 디지몬들이 습격해 오기 시작하고 아이들은 살아남기 위해, 다시 현실세계로 돌아가기 위해 [[모험]]을 시작한다. 아이들이 위험에 처할 때마다 [[디지바이스(디지몬 어드벤처)|디지바이스]]가 빛나며 파트너 디지몬이 [[성숙기]]로 [[진화(디지몬 시리즈)|진화]]해 위기를 극복하며, 점차 이 곳은 현실세계와는 [[디지털 월드|뭔가 다른 곳의 세상]]의 파일섬이란 것을 알게 된다.</p>',
    },
  ],
  goodCount: 7326,
  badCount: 545,
});

// 새로 생성된 페이지 UI 구현을 위한 함수, 목차도 비었다고 생각하면 됨.
export const getEmptyPageInfo = (groupName: string): PageInfo => ({
  pageName: groupName,
  pageId: 1,
  postList: [],
  goodCount: 0,
  badCount: 0,
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
];

interface Comment {
  commentId: number;
  nickName: string;
  content: string;
  createdAt: string;
}

export const comments: Comment[] = [
  {
    commentId: 1,
    nickName: '이경우',
    content: '이거 더 자세히 아시는 분 내용 추가 부탁드려요~',
    // createdAt: '2023-10-14T19:15:57.079009',
    createdAt: '2023.10.14',
  },
  {
    commentId: 2,
    nickName: '삼경우',
    content:
      '이거 더 자세히 아시는 분 내용 추가 부탁드려요~이거 더 자세히 아시는 분 내용 추가 부탁드려요~이거 더 자세히 아시는 분 내용 추가 부탁드려요~',
    // createdAt: '2023-10-14T19:17:42.500834',
    createdAt: '2023.10.14',
  },
  {
    commentId: 3,
    nickName: '사경우',
    content: '이거 더 자세히 아시는 분 내용 추가 부탁드려요~',
    // createdAt: '2023-10-14T19:17:43.309503',
    createdAt: '2023.10.14',
  },
  {
    commentId: 4,
    nickName: '내이름',
    content: '이거 더 자세히 아시는 분 내용 추가 부탁드려요~이거 더 자세히 아시는 분 내용 추가 부탁드려요~',
    // createdAt: '2023-10-14T19:17:44.138125',
    createdAt: '2023.10.14',
  },
];

interface History {
  memberId: number;
  nickName: string;
  historyId: number;
  title: string;
  content: string;
  createdAt: string;
}

interface PostHistory {
  postId: number;
  currentTitle: string;
  historyList: History[];
}

export const postHistoryDummyData: PostHistory = {
  postId: 1,
  currentTitle: '개요',
  historyList: [
    {
      memberId: 1,
      nickName: '이경우',
      historyId: 1,
      title: '개요',
      content:
        '이 작품의 주역인 선택받은 아이들은 각 캐릭터마다 테마를 갖고 있는데, 저마다 가진 8개의 문장이 갖는 가치(좌측부터 용기, 우정, 사랑, 지식, 희망, 순수, 성실, 빛)가 바로 그것이다. 실제로 캐릭터들은 그 진리에 맞는 성격을 지니고 있으나, 동시에 이 가치들은 약점이자 콤플렉스로서 기능하기도 한다. 가령 태일은 용기가 뛰어나지만 때론 만용을 부리며 무모한 일에 타인을 끌어들이고, 매튜는 브라더 콤플렉스로 우정을 의심한다. 또 소라는 어머니의 사랑을 강박으로 받아들이기도 했고, 한솔은 지식만으로 사물을 판단해 타인에 대한 배려가 부족했다. 이미나는 순수가 도를 넘어 응석에 가까운 수준이었고 정석도 성실함이 지나친 나머지 스스로도 고지식으로 받아들일 만큼 융통성이 부족했다. 각각의 캐릭터들은 자신의 장점이자 결핍이기도 한 이들 가치를 극복하는 과정을 겪으며 그 문장의 힘을 자신의 것으로 체화해나가며, 그 과정은 훌륭한 전개 덕에 어색함 없이 매우 자연스럽게 다가온다.',
      createdAt: '2023-10-12T14:30:34',
    },
    {
      memberId: 2,
      nickName: '김경우',
      historyId: 2,
      title: '개요',
      content: '내용... ㅇㅇㅇㅇㅇㅇ',
      createdAt: '2023-10-11T14:30:34',
    },
    {
      memberId: 3,
      nickName: '박경우',
      historyId: 3,
      title: '개요',
      content: '내용...',
      createdAt: '2023-10-09T14:30:34',
    },
  ],
};
