import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import type { RaceType } from '../../types/race';
import { deleteRaceThunk } from '../../redux/slices/race/thunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSelectedRacesById } from '../../redux/slices/race/slice';
import AddRaceComment from './AddRaceComment';
import OneRaceComment from './OneRaceComment';

type OneRaceProps = {
  race: RaceType;
};

export default function OneRace({ race }: OneRaceProps): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  // список комментов получить из race.CommentRaces <--- комменты конкректно к данной гонке
  // const allComments = useAppSelector((state) => state.comments.commits);
  // const comments = allComments; // .filter() // raceId
  const commentsForRace = race.CommentRaces || [];

  const dispatch = useAppDispatch();

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteRaceThunk(race.id));
  };

  return (
    <Card className="card" sx={{ display: 'flex', marginBottom: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ paddingLeft: 2 }}>
          <Typography component="div" variant="h5">
            {race.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {/* {race.date} */}
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
          {user.isAdmin === true && (
            <>
              <Button
                sx={{ marginRight: '5px' }}
                onClick={(e) => deleteHandler(e)}
                variant="outlined"
                color="error"
              >
                Удалить
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(setSelectedRacesById(race.id))}
              >
                Изменить
              </Button>
            </>
          )}
          {commentsForRace.map((comment) => (
            <OneRaceComment comment={comment} />
          ))}
          <AddRaceComment race={race} />
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
