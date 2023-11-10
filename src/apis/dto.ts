export interface Group {
  groupId: number;
  groupImage: string;
  groupName: string;
}

export interface MainGroups {
  myGroup: Group[];
  officialGroup: Group[];
  unOfficialGroup: Group[];
}

export interface GroupDetail extends Group {
  introduction: string;
  memberCount: number;
  created_at: string;
  entranceHint: string;
  groupType: 'UNOFFICIAL_OPENED' | 'UNOFFICIAL_CLOSED' | 'OFFICIAL';
}

export interface MyInfo {
  mainNickName: string;
  groupList: (Group & { groupNickName: string })[];
}

export interface ContributeItemContent {
  index: number;
  name: string;
  detail: string;
}

export interface ContributeItemProps {
  historyId: number;
  pageName: string;
  content: ContributeItemContent;
  createdAt: string;
}
