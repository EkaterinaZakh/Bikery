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
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deleteFestThunk } from '../../redux/slices/fest/thunk';
import { setSelectedFestById } from '../../redux/slices/fest/slice';
import type { FestType } from '../../types/fest';
import AddFestComment from './AddFestComment';
import OneFestComment from './OneFestComment';

type OneFestProps = {
  fest: FestType;
};

export default function OneFest({ fest }: OneFestProps): JSX.Element {
  const commentsForfest = fest.CommentFests || [];

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={fest.name} />
      <CardMedia component="img" height="194" image={fest.image} alt="" />
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
  );
}
