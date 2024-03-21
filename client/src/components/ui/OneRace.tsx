import React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function OneRace(): JSX.Element {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Маршрут до Химок
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Сложный капец
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Длинна: миллион км
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Дата: эври дей
          </Typography>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://unsplash.com/photos/mountains-surrounded-by-sea-of-clouds-during-daytime-JoQ__1tkXmY"
        alt=""
      />
    </Card>
  );
}
