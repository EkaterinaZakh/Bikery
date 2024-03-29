import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';

import DeleteIcon from '@mui/icons-material/Delete';
import type { ProdType } from '../../types/prod';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteProdThunk } from '../../redux/slices/prod/thunk';
import { openEditModal, setSelectedProdById } from '../../redux/slices/prod/slice';
import { addCartItemThunk } from '../../redux/slices/cart/thunk';

type OneProductProps = {
  prod: ProdType;
};

export default function OneProduct({ prod }: OneProductProps): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    void dispatch(deleteProdThunk(prod.id));
  };

  const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>, productId: number): void => {
    void dispatch(addCartItemThunk(productId));
  };

  return (
    <Card className="card_shop" sx={{ fontFamily: '', fontWeight: 400, fontStyle: 'normal' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '80%',
          // fontFamily: 'Pangolin',
          // fontWeight: 400,
          // fontStyle: 'normal',
        }}
      >
        <CardMedia
          className="shop_img"
          component="img"
          sx={{
            width: '250px',
            height: '250px',
            margin: '10px auto',
            backgroundPosition: 'center',
          }}
          image={`${import.meta.env.VITE_APP_TITLE}/img/product/${prod.image}`}
          alt="фото продукта"
        />

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {prod.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{ margin: '10px' }}>
            {prod.price} руб.
          </Typography>
        </CardContent>
      </Box>
      {user.isAdmin === true && (
        <div className="btn_box">
          {user.status === 'logged' && (
            <Button
              style={{
                backgroundColor: '#f66d52',
                color: 'black',
                marginBottom: '10px',
                borderRadius: '15px',
              }}
              className="btn-new"
              onClick={(e) => addToCartHandler(e, prod.id)}
            >
              Добавить в корзину
            </Button>
          )}
          <Button
            className="btn-new"
            onClick={deleteHandler}
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
          >
            Удалить
          </Button>

          <Button
            className="btn-new"
            variant="outlined"
            startIcon={<BorderColorRoundedIcon />}
            onClick={() => dispatch(openEditModal(prod.id))}
          >
            Изменить
          </Button>
        </div>
      )}
      <Button
        className="btn_product btn-new"
        sx={{
          backgroundColor: '#be8952',
          color: 'black',
          marginBottom: '10px',
          borderRadius: '15px',
          width: '200px',
          margin: '10px auto',
        }}
        variant="outlined"
        onClick={() => dispatch(setSelectedProdById(prod.id))}
      >
        Подробнее
      </Button>
    </Card>
  );
}
