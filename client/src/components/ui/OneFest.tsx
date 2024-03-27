import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteFestThunk } from '../../redux/slices/fest/thunk';
import { setSelectedFestById } from '../../redux/slices/fest/slice';
import type { FestType } from '../../types/fest';
import AddRaceComment from './AddRaceComment';
import AddFestComment from './AddFestComment';
import OneFestComment from './OneFestComment';

type OneFestProps = {
  fest: FestType;
};

export default function OneFest({ fest }: OneFestProps): JSX.Element {
  const commentsForfest = fest.CommentFest || [];

  const [expanded, setExpanded] = React.useState(false);
  const user = useAppSelector((store) => store.auth.user);
  const formattedDate = new Date(fest.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const dispatch = useAppDispatch();

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    void dispatch(deleteFestThunk(fest.id));
  };

  return (
    <Box sx={{ display: 'flex', border: '1px solid black' }}>
      <Card sx={{ display: 'flex', border: '1px solid red', margin: '10px' }}>
        <Box sx={{ border: '3px solid blue' }}>
          <CardMedia
            component="img"
            height="194"
            image={`${import.meta.env.VITE_APP_TITLE}/img/fest/${fest.image}`}
            alt=""
            sx={{ width: '400px', height: 'auto' }}
          />
        </Box>

        <Box sx={{ border: '3px solid green', marginLeft: '10px', width: '600px' }}>
          <CardHeader title={fest.name} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {fest.desc}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {formattedDate}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            {user.isAdmin === true && (
              <>
                <Button onClick={deleteHandler} variant="outlined" color="error">
                  Удалить
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => dispatch(setSelectedFestById(fest.id))}
                >
                  Изменить
                </Button>
              </>
            )}
            <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
              {expanded ? 'Скрыть' : 'Подробнее'}
            </IconButton>
          </CardActions>
        </Box>
        {expanded && (
          <CardContent>
            <Typography paragraph>
              {commentsForfest.map((comment) => (
                <OneFestComment key={comment.id} comment={comment} />
              ))}
              <AddFestComment fest={fest} />
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
}
