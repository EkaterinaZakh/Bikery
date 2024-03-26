import type { CommitType } from './commit';
import type { SetRating } from './rating';

export type RaceType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  length: number;
  userId: number;
  date: Date;
  rateCounter: number;
  // дописать, что сюда придут комменты CommentRaces?: комменты[]
  CommentRaces?: CommitType[];
  RacerRatings: SetRating[];
};

export type RaceStateType = {
  races: RaceType[];
  selectedRaces: RaceType | null;
};

export type AddRaceFormType = {
  name: string;
  image: string;
  desc: string;
  length: number;
  date: Date;
  rateCounter: number;
};
