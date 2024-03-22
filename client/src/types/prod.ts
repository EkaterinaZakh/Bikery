export type ProdType = {
  id: number;
  name: string;
  desc: string;
  price: string;
  categoryId: number;
};

export type ProdStateType = {
  prods: ProdType[];
};
