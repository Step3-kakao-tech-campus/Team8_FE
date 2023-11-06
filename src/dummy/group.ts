interface Group {
  groupId: number;
  groupImage: string;
  groupName: string;
}

export const officialGroupDummyData: Group[] = [
  {
    groupId: 1,
    groupName: '부산대학교',
    groupImage: 'https://swedu.pusan.ac.kr/sites/swedu/atchmnfl_mngr/imageSlide/4829/temp_1669337402976100.jpg',
  },
  {
    groupId: 2,
    groupName: '공식 그룹 2',
    groupImage:
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
  },
  {
    groupId: 3,
    groupName: '공식 그룹 3',
    groupImage:
      'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80',
  },
];

export const unOfficialGroupDummyData: Group[] = [
  {
    groupId: 1,
    groupName: '춘장이1기',
    groupImage:
      'https://i.namu.wiki/i/IUKpnzynPCMlkcs4qRLos3NAnwQu48KLCi7eUXFK0RDyRO1o4rgquRpH2iEJh6G4CGkiGglBWuDp04zsc4Cwww.webp',
  },
  {
    groupId: 2,
    groupName: '카카오테크캠퍼스',
    groupImage: 'https://image.jtbcplus.kr/data/contents/jam_photo/202210/12/e940c652-d8ff-4faa-bad9-b2a31daa0a33.jpg',
  },
  {
    groupId: 3,
    groupName: 'group3',
    groupImage: 'https://via.placeholder.com/128',
  },
  {
    groupId: 4,
    groupName: 'group4',
    groupImage: 'https://via.placeholder.com/128',
  },
  {
    groupId: 5,
    groupName: 'group5',
    groupImage: 'https://via.placeholder.com/128',
  },
];

export const nullGroupDummyData: Group[] = [];

// 임시 초대코드
export const inviteCodeDummyData: string =
  'https://www.notion.so/55bd5b40558b4558a376aa70617b0e1a?v=d19fad98d6b6424da591b3c64dc118a8&p=a7a7a704b33e477e8b330f746166a22e&pm=s';

interface ContributeItemContent {
  index: number;
  name: string;
  detail: string;
}

interface ContributeItem {
  historyId: number;
  pageName: string;
  content: ContributeItemContent;
  createAt: string;
}

interface GroupMypage {
  groupName: string;
  groupNickName: string;
  historyList: ContributeItem[];
}

export const groupMyPageDummyData: GroupMypage = {
  groupName: '부산대학교',
  groupNickName: '말차프라페',
  historyList: [
    {
      historyId: 1,
      pageName: '제도관',
      content: {
        index: 6.4,
        name: '4층',
        detail:
          '4층에는 과사가 있다. [1] 참고로 오른쪽으로 도는게 빠르다. 그 외에는 주로 수업에 이용되는 전산실(6408, 6409, 6409-1)과 여러 랩실이 존재한다. 방학에도 4층을 방문하면 피곤해보이는 대학원생을 여럿 목격할 수 있다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 2,
      pageName: '제도냥',
      content: {
        index: 1,
        name: '개요',
        detail:
          '2017년도쯤부터 2021년쯤까지 제도관 앞에서 흔히 볼 수 있었던 고양이. 덩치가 매우 크고(특히 얼굴이) 얼굴이 좌우 대칭으로 생겼다. 2층으로 올라가는 계단 및 중앙 정원에 누워있는 모습을 자주 목격할 수 있었으나 현재는 무지개다리를 건넜다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 3,
      pageName: '제도관',
      content: {
        index: 6.4,
        name: '4층',
        detail:
          '4층에는 과사가 있다. [1] 참고로 오른쪽으로 도는게 빠르다. 그 외에는 주로 수업에 이용되는 전산실(6408, 6409, 6409-1)과 여러 랩실이 존재한다. 방학에도 4층을 방문하면 피곤해보이는 대학원생을 여럿 목격할 수 있다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 4,
      pageName: '제도냥',
      content: {
        index: 1,
        name: '개요',
        detail:
          '2017년도쯤부터 2021년쯤까지 제도관 앞에서 흔히 볼 수 있었던 고양이. 덩치가 매우 크고(특히 얼굴이) 얼굴이 좌우 대칭으로 생겼다. 2층으로 올라가는 계단 및 중앙 정원에 누워있는 모습을 자주 목격할 수 있었으나 현재는 무지개다리를 건넜다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 5,
      pageName: '제도관',
      content: {
        index: 6.4,
        name: '4층',
        detail:
          '4층에는 과사가 있다. [1] 참고로 오른쪽으로 도는게 빠르다. 그 외에는 주로 수업에 이용되는 전산실(6408, 6409, 6409-1)과 여러 랩실이 존재한다. 방학에도 4층을 방문하면 피곤해보이는 대학원생을 여럿 목격할 수 있다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 6,
      pageName: '제도냥',
      content: {
        index: 1,
        name: '개요',
        detail:
          '2017년도쯤부터 2021년쯤까지 제도관 앞에서 흔히 볼 수 있었던 고양이. 덩치가 매우 크고(특히 얼굴이) 얼굴이 좌우 대칭으로 생겼다. 2층으로 올라가는 계단 및 중앙 정원에 누워있는 모습을 자주 목격할 수 있었으나 현재는 무지개다리를 건넜다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 7,
      pageName: '제도관',
      content: {
        index: 6.4,
        name: '4층',
        detail:
          '4층에는 과사가 있다. [1] 참고로 오른쪽으로 도는게 빠르다. 그 외에는 주로 수업에 이용되는 전산실(6408, 6409, 6409-1)과 여러 랩실이 존재한다. 방학에도 4층을 방문하면 피곤해보이는 대학원생을 여럿 목격할 수 있다.',
      },
      createAt: '2023.09.14',
    },
    {
      historyId: 8,
      pageName: '제도냥',
      content: {
        index: 1,
        name: '개요',
        detail:
          '2017년도쯤부터 2021년쯤까지 제도관 앞에서 흔히 볼 수 있었던 고양이. 덩치가 매우 크고(특히 얼굴이) 얼굴이 좌우 대칭으로 생겼다. 2층으로 올라가는 계단 및 중앙 정원에 누워있는 모습을 자주 목격할 수 있었으나 현재는 무지개다리를 건넜다.',
      },
      createAt: '2023.09.14',
    },
  ],
};

export const groupMember: string[] = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'indigo',
  'jicama',
  'kiwi',
  'lemon',
  'mango',
  'nectarine',
  'orange',
];

interface GroupInfo {
  groupName: string;
  groupImage: string;
  introduction: string;
  created_at: string;
  memberCount: number;
  entranceHint: string;
}

export const groupInfoDummyData: GroupInfo = {
  groupName: '파닥몬 팬클럽',
  groupImage: 'https://s3.orbi.kr/data/file/united2/3ad3fab7db63458580252770eeb79c74.jpg',
  introduction: '파닥파닥',
  created_at: '2023-10-06T12:34:56',
  memberCount: 123,
  entranceHint: '파닥몬이 진화한 천사형 디지몬의 이름은?',
};

export const groupJoinPassword: string = '엔젤몬';

export const groupType: 'official' | 'unofficialOpen' | 'unofficialNoOpen' = 'official';
