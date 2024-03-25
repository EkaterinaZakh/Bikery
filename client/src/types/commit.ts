export type CommitType = {
  id: number;
  userId: number;
  raceId: number;
  text: string;
};

export type AddCommitForm = {
  commits: CommitType[];
};

export type CommitsStateType = {
  commits: CommitType[];
};

export type OmitCommitType = Omit<CommitType, 'id' | 'userId'>;
