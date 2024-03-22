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
