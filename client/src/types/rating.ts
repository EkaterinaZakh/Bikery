export type SetRating = {
  id: number;
  userId: number;
  raceId: number;
  starsCount: number;
};

export type RatesStateType = {
  rates: SetRating[];
};
