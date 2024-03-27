import { Button } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import OneCartItem from '../ui/OneCartItem';

export default function CartPage(): JSX.Element {
  const cartItems = useAppSelector((state) => state.cartItems.cart);

  console.log(cartItems);
  
  return (
    <div className="cart_main">
      <h2 className="cart_h">Корзина</h2>

      <div className="cart_content">
        <div className="cart_list">
          <h3>Выбранные товары </h3>
          {cartItems.map((el) => (
            <OneCartItem cartItem={el} key={el.productId} />
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
