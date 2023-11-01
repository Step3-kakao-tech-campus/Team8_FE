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
