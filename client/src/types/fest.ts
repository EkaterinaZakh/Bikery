export type FestType = {
    id: number;
    name: string;
    desc: string;
    image: string;
    place: string;
    userId: number;
    date: string;
  };

  export type AddFestForm = {
    name: string;
    desc: string;
    image: string;
    place: string;
    date: string;
  }

  export type FestsStateType = {
    fests: FestType[];
    selectedFest: FestType | null;
  }