import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { ProdType } from '../../types/prod';

type OneProductProps = {
  prod: ProdType;
};

export default function OneProduct({ prod }: OneProductProps): JSX.Element {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {prod.name}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" component="div">
            {prod.price}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" component="div">
            {prod.desc}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" component="div">
            {prod.price}
          </Typography>

          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <Button href="#text-buttons">Купить</Button>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://images.unsplash.com/photo-1610900656436-1baa9fbe8d05?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </Card>
  );
}
