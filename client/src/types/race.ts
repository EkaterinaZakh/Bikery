export type RaceType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  length: number;
  userId: number;
  date: Date;
  rateCounter: number;
};

export type RaceStateType = {
  races: RaceType[];
};

export type AddRaceForm = {
  name: string;
  image: string;
  desc: string;
  length: number;
  date: Date;
};
