import React from 'react';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { RaceType } from '../../types/race';

type OneRaceProps = {
  race: RaceType;
};

export default function OneRace({ race }: OneRaceProps): JSX.Element {
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {race.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {/* {race.date} */}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.length}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.desc}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.rateCounter}
          </Typography>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardContent>
      </Box>

      <CardMedia component="img" sx={{ width: 151 }} image={race.image} alt="" />
    </Card>
  );
}
