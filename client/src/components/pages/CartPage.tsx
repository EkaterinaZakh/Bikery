import { Button } from '@mui/material';
import React from 'react';
import OneProduct from '../ui/OneProduct';
import { useAppSelector } from '../../redux/hooks';

export default function CartPage(): JSX.Element {
  const prods = useAppSelector((state) => state.products.prods);

  return (
    <div className="cart_main">
      <h2 className="cart_h">Корзина</h2>

      <div className="cart_content">
        <div className="cart_list">
          <h3>Выбранные товары </h3>
          {prods.map((el) => (
            <OneProduct prod={el} key={el.id} />
          ))}
        </div>
        <div className="cart_order">
          <h3>Детали доставки </h3>
          <p>Адрес доставки</p>
          <div className="line" />
          <p>Способ оплаты</p>
          <div className="line" />
          <p>Итого:</p>
          <Button variant="outlined" color="info">
            Оплатить
          </Button>
        </div>
      </div>
    </div>
  );
}
