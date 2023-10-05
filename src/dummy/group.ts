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
