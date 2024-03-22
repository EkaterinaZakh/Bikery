import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import CatList from '../ui/CatList';
import OneProduct from '../ui/OneProduct';

export default function ShopPage(): JSX.Element {
  const categories = useAppSelector((state) => state.categories.categories);
  const prods = useAppSelector((state) => state.products.prods);
  return (
    <>
      <div>
        {categories.map((category) => (
          <CatList key={category.id} category={category} />
        ))}
      </div>
      <h3>ShopPage</h3>
      <div style={{display: "flex", flexWrap: "wrap", width: '450px', height: '300px'}}>
       
        {prods.map((el) => (
          <OneProduct prod={el} key={el.id} />
        ))}
      </div>
    </>
  );
}
