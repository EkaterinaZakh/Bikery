import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Map, Placemark, YMaps, Geocode } from '@pbe/react-yandex-maps'; // Импортируем компоненты для работы с картами
import type { RaceType } from '../../types/race';
import { deleteRaceThunk } from '../../redux/slices/race/thunk';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Rate from './Rate';
import { setSelectedRacesById } from '../../redux/slices/race/slice';
import AddRaceComment from './AddRaceComment';
import OneRaceComment from './OneRaceComment';

type OneRaceProps = {
  race: RaceType;
};

export default function OneRace({ race }: OneRaceProps): JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const commentsForRace = race.CommentRaces || [];
  const dispatch = useAppDispatch();

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteRaceThunk(race.id));
  };

  return (
    <Card className="card" sx={{ display: 'flex', marginBottom: 3, borderRadius: '10px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Box sx={{ flex: 1 }}>
          <CardContent sx={{ paddingLeft: 2 }}>
            <Typography component="div" variant="h5">
              {race.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {race.length}Км
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {race.desc}
            </Typography>
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
            <Rate rates={race.RaceRatings} race={race} />
            {commentsForRace.map((comment) => (
              <OneRaceComment key={comment.id} comment={comment} />
            ))}
            <AddRaceComment race={race} />
          </CardContent>
        </Box>

        <Box sx={{ width: '50%', height: '100%', marginRight: '5px' }}>
          {/* Отображаем карту с метками */}
          <div style={{ width: '100%', height: '100%', border: '1px solid black' }}>
            <YMaps query={{ apikey: '4031e963-21ea-4bd5-876b-ed9d78610fee' }}>
              <Map
                style={{ width: '100%', height: '100%', border: '1px solid black' }}
                defaultState={{ center: [55.75, 37.57], zoom: 9 }}
              >
                {/* Метка для города А */}
                <Placemark geometry={[55.75, 37.57]} properties={{ iconCaption: 'Москва' }} />

                {/* Метка для города Б */}
                <Placemark geometry={[59.94, 30.32]} properties={{ iconCaption: 'Санкт-Петербург' }} />
              </Map>
            </YMaps>
          </div>
        </Box>
      </Box>

      <CardMedia component="img" sx={{ width: '50%', height: '100%' }} image={race.image} alt="" />
    </Card>
  );
}
