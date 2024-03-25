import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { RaceType } from '../../types/race';
import { deleteRaceThunk } from '../../redux/slices/race/thunk';
import { useAppDispatch } from '../../redux/hooks';

type OneRaceProps = {
  race: RaceType;
};

export default function OneRace({ race }: OneRaceProps): JSX.Element {
  const dispatch = useAppDispatch();

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteRaceThunk(race.id));
  };

  return (
    <Card sx={{ display: 'flex', marginBottom: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ paddingLeft: 2 }}>
          <Typography component="div" variant="h5">
            {race.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.date}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.length} Км
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.desc}
          </Typography>
          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            {race.rateCounter}
          </Typography> */}
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button sx={{marginRight:'5px'}} onClick={(e) => deleteHandler(e)} variant="outlined" color="error">
            Удалить
          </Button>
          <Button variant="contained">
            Изменить
          </Button>
        </CardContent>
      </Box>

      <CardMedia
        component="img"
        sx={{ width: '30%', marginLeft: 'auto' }}
        image={race.image}
        alt=""
      />
    </Card>
  );
}
