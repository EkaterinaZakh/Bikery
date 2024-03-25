export type CategoryType = {
  id: number;
  name: string;
};

export type CategoryStateType = {
  categories: CategoryType[];
  selectedCategory: CategoryType | null;
};
