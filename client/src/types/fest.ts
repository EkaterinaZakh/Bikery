import type { FestCommitType } from './commit';

export type FestType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  place: string;
  userId: number;
  date: string;
  CommentFests?: FestCommitType[];
};

export type AddFestForm = {
  name: string;
  desc: string;
  image: string;
  place: string;
  date: string;
};

export type FestsStateType = {
  fests: FestType[];
  selectedFest: FestType | null;
  modalType: 'edit' | 'info' | null;
};
