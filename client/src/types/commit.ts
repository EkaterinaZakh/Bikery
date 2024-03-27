import type { BackendUser } from './auth';

export type CommitType = {
  id: number;
  userId: number;
  raceId: number;
  text: string;
  User?: BackendUser;
};

export type FestCommitType = {
  id: number;
  userId: number;
  festId: number;
  text: string;
  User?: BackendUser;
};

export type FestCommitStateType = {
  festcomments: FestCommitType[];
};

export type AddCommitForm = {
  commits: CommitType[];
};

export type CommitsStateType = {
  commits: CommitType[];
};

export type OmitCommitType = Omit<CommitType, 'id' | 'userId'>;

export type OmitFestCommitType = Omit<FestCommitType, 'id' | 'userId'>;
