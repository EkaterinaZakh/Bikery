import { Button } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import OneCartItem from '../ui/OneCartItem';

export default function CartPage(): JSX.Element {
  const cartItems = useAppSelector((state) => state.cartItems.cart);

  console.log(cartItems);

  return (
    <div className="cart_main">
      <div className="cart_content">
        <h3 style={{ color: 'white' }}>Выбранные товары </h3>
        <div className="cart_list">
          {cartItems.map((el) => (
            <OneCartItem cartItem={el} key={el.productId} />
          ))}
        </div>
      </div>
    </div>
  );
}
l