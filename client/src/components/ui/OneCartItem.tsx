import React from 'react';
import { Button, CardMedia } from '@mui/material';
import type { CartType } from '../../types/cart';
import { useAppDispatch } from '../../redux/hooks';
import { deleteCartItemThunk } from '../../redux/slices/cart/thunk';

type CartItemProps = {
  cartItem: CartType;
};

export default function OneCartItem({ cartItem }: CartItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  const deleteHandler = (): void => {
    void dispatch(deleteCartItemThunk(cartItem.productId));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '10px',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <strong>{cartItem.Product?.name}</strong>
      </div>
      <CardMedia
        component="img"
        sx={{ width: '100px', marginBottom: '20px', scale: '1.4' }}
        image={`${import.meta.env.VITE_APP_TITLE}/img/product/${cartItem.Product?.image}`}
        alt="фото продукта"
      />
      <div style={{ marginBottom: '10px' }}>
        <strong>Цена {cartItem.Product?.price}</strong>{' '}
      </div>
      <Button color="error" onClick={deleteHandler}>
        Убрать из корзины
      </Button>
    </div>
  );
}
