import React from 'react'
import { Button, CardMedia } from '@mui/material';
import type { CartType } from '../../types/cart';
import { useAppDispatch } from '../../redux/hooks';
import { deleteCartItemThunk } from '../../redux/slices/cart/thunk';

type CartItemProps = {
    cartItem: CartType;
}

export default function OneCartItem({cartItem}: CartItemProps): JSX.Element {
    const dispatch = useAppDispatch();

    const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        void dispatch(deleteCartItemThunk(cartItem.productId))
    }

  return (
    <>
    <div>{cartItem.Product?.name}</div>
    <CardMedia
          component="img"
          sx={{ width: '280px' }}
          image={`${import.meta.env.VITE_APP_TITLE}/img/product/${cartItem.Product?.image}`}
          alt="фото продукта"
        />
    <div>{cartItem.Product?.price}</div>
    <Button onClick={deleteHandler}>Убрать из корзины</Button>
    </>
  )
}
