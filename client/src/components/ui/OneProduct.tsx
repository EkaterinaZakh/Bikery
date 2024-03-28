import React, { useState } from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
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
    <Card
      sx={{ display: 'flex', flexDirection: 'column', border: '1px solid gray', width: '400px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          sx={{ width: '280px' }}
          image={`${import.meta.env.VITE_APP_TITLE}/img/product/${prod.image}`}
          alt="фото продукта"
        />

        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {prod.name}
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            {prod.desc}
          </Typography> */}
          <Typography variant="h6" color="text.secondary" component="div" sx={{ margin: '10px' }}>
            {prod.price} руб.
          </Typography>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button onClick={(e) => addToCartHandler(e, prod.id)}>В корзину</Button>
        </CardContent>
      </Box>
      {user.isAdmin === true && (
        <div>
          <Button
            onClick={deleteHandler}
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="error"
          >
            Удалить
          </Button>

          <Button
            variant="outlined"
            startIcon={<BorderColorRoundedIcon />}
            onClick={() => dispatch(openEditModal(prod.id))}
          >
            Изменить
          </Button>
          <Button variant="outlined" onClick={() => dispatch(setSelectedProdById(prod.id))}>
            Подробнее
          </Button>
        </div>
      )}
    </Card>
  );
}
