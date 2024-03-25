export type ProdType = {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
  categoryId: number;
};

export type ProdStateType = {
  prods: ProdType[];
  selectedProd: ProdType | null;
};

export type AddProdForm = {
  name: string;
  desc: string;
  price: string;
  image: string;
};
