import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  const formattedDate = new Date(race.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const dispatch = useAppDispatch();

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteRaceThunk(race.id));
  };

  return (
    // <Card className="one_race_card" sx={{ backgroundColor: 'black' }}>
    //   <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    //     <CardContent sx={{ paddingLeft: 3 }}>
    //       <Typography component="div" variant="h6">
    //         {race.name}
    //       </Typography>
    //       <Typography variant="subtitle2" component="div">
    //         {formattedDate}
    //       </Typography>
    //       <Typography variant="subtitle2" component="div">
    //         {race.length} Км
    //       </Typography>
    //       <Typography variant="subtitle1" component="div">
    //         {race.desc}
    //       </Typography>
    //       {/* <IconButton aria-label="add to favorites">
    //         <FavoriteIcon />
    //       </IconButton> */}
    //       {user.isAdmin === true && (
    //         <>
    //           <Button
    //             sx={{ marginRight: '10px' }}
    //             onClick={(e) => deleteHandler(e)}
    //             variant="outlined"
    //             color="error"
    //           >
    //             Удалить
    //           </Button>
    //           <Button
    //             variant="outlined"
    //             color="primary"
    //             onClick={() => dispatch(setSelectedRacesById(race.id))}
    //           >
    //             Изменить
    //           </Button>
    //         </>
    //       )}
    //       <Rate rates={race.RaceRatings} race={race} />
    //       <Card className="comments">
    //         <AddRaceComment race={race} />
    //         {commentsForRace.map((comment) => (
    //           <OneRaceComment key={comment.id} comment={comment} />
    //         ))}
    //       </Card>
    //     </CardContent>
    //   </Box>

    //   <CardMedia
    //     component="img"
    //     className="race_img"
    //     sx={{ width: '70%', padding: '10px' }}
    //     image={race.image}
    //     alt=""
    //   />
    // </Card>

    <Card
      className="one_race_card"
      sx={{
        // width: 'auto',
        // borderRadius: '0px 10px 10px 0px',
        // filter: 'drop-shadow(0 5px 10px 0 #ffffff)',
        // backgroundColor: '#ffffff',
        // padding: '20px',
        position: 'relative',
        // zIndex: '0',
        overflow: 'hidden',
        transition: '0.6s ease-in',
        '&:hover': {
          // color: '#ffffff',
          // backgroundColor: '#f66d52', // Изменение цвета при наведении
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          top: '-15px',
          // right: '-15px',
          background: 'transparent', // Прозрачный цвет, чтобы не было видно перед карточкой
          height: '220px',
          width: '25px',
          // borderRadius: '32px',a
          transform: 'scale(1)',
          transformOrigin: '50% 50%',
          transition: 'transform 0.15s ease-out',
        },
        '&:hover::before': {
          transitionDelay: '0.2s',
          transform: 'scale(40)',
          background: '#f66d52', // Цвет, который будет заполнять всю карточку
        },
      }}
    >
      <CardHeader title={race.name} />
      <CardMedia
        className="race_img"
        component="img"
        height="200"
        image={`${import.meta.env.VITE_APP_TITLE}/img/race/${race.image}`}
        alt=""
      />
      <Rate rates={race.RaceRatings} race={race} />
      <CardContent>
        <Typography variant="subtitle2">{race.length} Км</Typography>
        <Typography variant="subtitle2">{race.desc}</Typography>
        <Typography variant="subtitle1">{formattedDate}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        {user.isAdmin === true && (
          <>
            <Button className="delete_btn" onClick={deleteHandler}>
              Удалить
            </Button>
            <Button className="edit_btn" onClick={() => dispatch(setSelectedRacesById(race.id))}>
              Изменить
            </Button>
          </>
        )}
        <IconButton
          className="more_button"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {expanded ? 'Скрыть' : 'Подробнее'}
        </IconButton>
      </CardActions>
      {expanded && (
        <CardContent>
          <Typography
            paragraph
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '5px',
              wordWrap: 'break-word',
            }}
          >
            {commentsForRace.map((comment) => (
              <OneRaceComment key={comment.id} comment={comment} />
            ))}
            <AddRaceComment race={race} />
          </Typography>
        </CardContent>
      )}
    </Card>
  );
}
