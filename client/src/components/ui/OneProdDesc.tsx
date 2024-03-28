import React, { useState } from 'react';
import { Button, Box, CardMedia } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addCartItemThunk } from '../../redux/slices/cart/thunk';

type OneProdDescProps = {
  onCancel?: () => void;
};

export default function OneProdDesc({ onCancel }: OneProdDescProps): JSX.Element {
  const selectedProd = useAppSelector((state) => state.products.selectedProd);
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch();

  const [prod, setProd] = useState(selectedProd);

  const cancelHandler = (): void => {
    onCancel?.();
  };

  const addToCartHandler = (e:React.MouseEvent<HTMLButtonElement>, productId: number): void => {
    void dispatch(addCartItemThunk(productId)) 
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '750px',
        height: '500px',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '10px',
      }}
    >
      <Box style={{ display: 'flex', width: '700px' }}>
        <CardMedia
          component="img"
          image={`${import.meta.env.VITE_APP_TITLE}/img/product/${prod?.image}`}
          alt="картинка товара"
          sx={{ width: '300px', height: '300px', border: '1px solid red' }}
        />   
        <Box sx={{ marginLeft: '15px' }}>
          <Box sx={{ fontSize: '35px', fontWeight: 'bold' }}>{prod?.name}</Box>
          <Box sx={{fontSize: '25px', marginTop: '15px'}}>{prod?.price} ₽</Box>
          <Box sx={{ marginTop: '15px', fontSize:'20px' }}>{prod?.desc}</Box>
          {user.status === 'logged' && (
          <Button
        style={{ marginTop: '15px', width: '130px' }}
        variant="contained"
        onClick={(e) => addToCartHandler(e, prod?.id)}
      >
        В корзину
      </Button>     
  )}
      <Button
        style={{ marginTop: '15px', marginLeft: '15px', width: '130px' }}
        variant="contained"
        onClick={cancelHandler}
      >
        Закрыть
      </Button>
        </Box>
      </Box>   
    </Box>
  );
}
