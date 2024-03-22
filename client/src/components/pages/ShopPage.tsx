import React from 'react';
import OneProduct from '../ui/OneProduct';
import { useAppSelector } from '../../redux/hooks';

export default function ShopPage(): JSX.Element {
  const prods = useAppSelector((state) => state.products.prods);
  return (
    <div>
      <h3>ShopPage</h3>
      {prods.map((el) => (
        <OneProduct prod={el} key={el.id} />
      ))}
    </div>
  );
}
