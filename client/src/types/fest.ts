export type FestType = {
    id: number;
    name: string;
    desc: string;
    image: string;
    place: string;
    userId: number;
    date: Date;
  };

  export type AddFestForm = {
    name: string;
    desc: string;
    image: string;
    place: string;
    date: Date;
  }

  export type FestsStateType = {
    fests: FestType[];
    selectedFest: FestType | null;
  }