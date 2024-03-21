export type FestType = {
    id: number;
    name: string;
    desc: string;
    image: string;
    place: string;
    userId: number;
    date: Date;
  };

  export type FestsStateType = {
    fests: FestType[];
  }