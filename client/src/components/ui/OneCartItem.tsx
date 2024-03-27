import React from 'react'
import type { CartType } from '../../types/cart';

type CartItemProps = {
    cartItem: CartType;
}

export default function OneCartItem({cartItem}: CartItemProps): JSX.Element {
  return (
    <>
    <div>{cartItem.userId}</div>
    <div>ololo</div>
    <div>OneCartItem</div>
    </>
  )
}
